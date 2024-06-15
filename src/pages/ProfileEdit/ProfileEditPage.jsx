import SettingsLayout from '@/components/SettingsLayout/SettingsLayout';
import Button from '@/components/ui/Button';
import SettingsSectionWrapper from '../property-edit/components/SettingsSectionWrapper';
import SettingsSectionTitle from '../property-edit/components/SettingsSectionTitle';
import SettingSectionBody from '../property-edit/components/SettingSectionBody';
import Input2 from '@/components/ui/Input2';
import { useContext, useState, useRef } from 'react';
import AuthContext from '@/context/AuthProvider';
import { useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function ProfileEditPage() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    selectedImage: null,
    deletePreviousImage: false,
  });

  const { auth } = useContext(AuthContext);
  const { data, refetch } = useQuery({ queryKey: ['auth', auth.accessToken] });

  const mutation = useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: async () => {
      console.log('userData:', userData);
      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('firstName', userData.firstName);
      formData.append('lastName', userData.lastName);
      formData.append('file', userData.selectedImage);
      formData.append('deletePreviousImage', userData.deletePreviousImage);

      const results = await axiosInstance.patch('/user/edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      return results;
    },
    onSuccess: () => {
      setUserData({
        ...userData,
        selectedImage: null,
        deletePreviousImage: false,
      });
      refetch();
    },
  });

  const handleDelete = () => {
    if (userData.selectedImage) {
      setUserData({
        ...userData,
        selectedImage: null,
      });
    } else {
      setUserData({
        ...userData,
        deletePreviousImage: !!data?.user.profilePicture.url,
      });
    }
  };

  return (
    <SettingsLayout>
      <section className="flex flex-col max-sm:px-4 border-b border-gray-400 pb-4">
        <h4 className="mt-4">Basic information</h4>
        <div className="flex justify-between item-center gap-3 py-4">
          <div className="flex flex-col justify-between">
            <div className="mb-2 md:mb-4">
              <h6>Profile photo</h6>
              <span className="text-gray-500">Max size 2mb</span>
            </div>
            <div className="flex gap-1 w-fit">
              <Button
                className="bg-gray-800 text-base-300"
                handleClick={() => inputRef.current.click()}
              >
                Change
                <input
                  type="file"
                  className="hidden"
                  ref={inputRef}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      selectedImage:
                        e.target.files[0] || userData.selectedImage,
                    });
                  }}
                  accept="image/*"
                />
              </Button>
              <Button className="bg-gray-500" handleClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
          <div className="avatar">
            <div className="bg-gray-600 rounded-full w-28">
              {userData.selectedImage ? (
                <img
                  src={URL.createObjectURL(userData.selectedImage)}
                  className="object-cover"
                />
              ) : (
                !!data?.user.profilePicture & !userData.deletePreviousImage && (
                  <img
                    src={data?.user.profilePicture.url}
                    className="object-cover"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="max-sm:px-4">
        <SettingsSectionWrapper>
          <SettingsSectionTitle title="Username:">
            <div>Enter your username</div>
          </SettingsSectionTitle>
          <SettingSectionBody>
            <Input2
              placeholder={data?.user?.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </SettingSectionBody>
        </SettingsSectionWrapper>
        <SettingsSectionWrapper>
          <SettingsSectionTitle title="First name:">
            <div>Enter your first name</div>
          </SettingsSectionTitle>
          <SettingSectionBody>
            <Input2
              placeholder={data?.user?.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
          </SettingSectionBody>
        </SettingsSectionWrapper>
        <SettingsSectionWrapper>
          <SettingsSectionTitle title="Last name:">
            <div>Enter your last name</div>
          </SettingsSectionTitle>
          <SettingSectionBody>
            <Input2
              placeholder={data?.user?.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </SettingSectionBody>
        </SettingsSectionWrapper>
        <div className="mt-12 mb-24 flex gap-1 items-center justify-end">
          <Button
            className="bg-gray-500 px-4 py-3 rounded-md"
            handleClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            className="bg-gray-900 text-white py-3 px-4 rounded-md"
            handleClick={() => !mutation.isLoading && mutation.mutate()}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </SettingsLayout>
  );
}

export default ProfileEditPage;
