import { createContext, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useQueryAuth from '@/hooks/useQueryAuth';
import PropTypes from 'prop-types';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';
import AuthContext from '@/context/AuthProvider';

export const ListingContext = createContext();

function ListingProvider({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const listingId = useParams().listingId;
  const { data: listing, status } = useQueryAuth({
    queryKey: ['property', listingId],
    url: `/landlord/listings/${listingId}`,
  });
  const [listingFormData, setListingFormData] = useState(listing?.rentalListing || {});
  const [removedImages, setRemovedImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  
  const updateListingMutation = useMutation({
    mutationKey: ['updateListing'],
    mutationFn: async (images) => {
      const filteredImages = listingFormData.images.filter(
        (image) => !removedImages.includes(image.public_id)
      );
      if (images?.length > 0) {
        filteredImages.push(...images);
      }
      const response = await axiosInstance.put(
        `/landlord/listings/${listingId}`,
        { ...listingFormData, images: filteredImages, removedImages },
        { headers: { Authorization: `Bearer ${auth?.accessToken}` } }
      );
      return response.data;
    },
    onSuccess: () => {
      navigate('../properties');
    },
  });

  const uploadImagesMutation = useMutation({
    mutationKey: ['updateImages'],
    mutationFn: async () => {
      const formData = new FormData();
      newImages.forEach((file) => {
        formData.append('files', file);
      });
      const { data } = await axiosInstance.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${auth?.accessToken}` },
      });
      return data;
    },
    onSuccess: ({ results }) => {
      const images = results.map((image) => ({ public_id: image.public_id, url: image.secure_url }));
      updateListingMutation.mutate(images);
    },
  });
  return (
    <ListingContext.Provider
      value={{
        listingFormData,
        setListingFormData,
        status,
        listing,
        removedImages,
        setRemovedImages,
        newImages,
        setNewImages,
        uploadImagesMutation,
        updateListingMutation,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}

ListingProvider.propTypes = {
  children: PropTypes.node,
};

export default ListingProvider;
