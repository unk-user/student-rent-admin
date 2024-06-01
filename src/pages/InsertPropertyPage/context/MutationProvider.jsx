import axiosInstance from '@/utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '@/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormProvider';
import { createContext } from 'react';
import { PropTypes } from 'prop-types';

export const MutationContext = createContext();

function MutationProvider({ children }) {
  const navigate = useNavigate();
  const { propertyDetails, selectedFiles } = useContext(FormContext);
  const { auth, refreshAccessToken } = useContext(AuthContext);
  const [authErrorCount, setAuthErrorCount] = useState(0);

  const publishListing = async (images) => {
    const response = await axiosInstance.post(
      '/landlord/listings',
      { ...propertyDetails, images },
      {
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }
    );
    return response.data;
  };

  const publishListingMutation = useMutation({
    mutationKey: ['publishListing'],
    mutationFn: (images) => publishListing(images),
    onSuccess: () => navigate('/dashboard/properties'),
  });

  const uploadImages = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    const { data } = await axiosInstance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    });
    return data;
  };

  const uploadImagesMutation = useMutation({
    mutationKey: ['uploadImages'],
    mutationFn: uploadImages,
    onSuccess: ({ results }) => {
      const images = results.map((image) => ({
        public_id: image.public_id,
        url: image.secure_url,
      }));
      publishListingMutation.mutate(images);
    },
  });

  useEffect(() => {
    if (
      uploadImagesMutation.status === 'error' &&
      authErrorCount < 2 &&
      (uploadImagesMutation.error?.response?.status === 401 ||
        uploadImagesMutation.error?.response?.status === 403)
    ) {
      setAuthErrorCount((prev) => prev + 1);
      refreshAccessToken().then(() => uploadImagesMutation());
    } else if (uploadImagesMutation.status === 'error' && authErrorCount > 1) {
      navigate('/login', { replace: true });
    } else if (uploadImagesMutation.status === 'success') {
      setAuthErrorCount(0);
    }
  }, [
    uploadImagesMutation.status,
    authErrorCount,
    refreshAccessToken,
    navigate,
    uploadImagesMutation,
  ]); //auth error handling

  return (
    <MutationContext.Provider
      value={{ uploadImagesMutation, publishListingMutation }}
    >
      {children}
    </MutationContext.Provider>
  );
}

MutationProvider.propTypes = {
  children: PropTypes.any,
};

export default MutationProvider;
