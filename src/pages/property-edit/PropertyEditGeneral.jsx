import { ListingContext } from './context/ListingProvider';
import { useContext } from 'react';
import SettingsSectionWrapper from './components/SettingsSectionWrapper';
import SettingsSectionTitle from './components/SettingsSectionTitle';
import SettingSectionBody from './components/SettingSectionBody';
import ImagesEdit from './components/ImagesEdit';
import Input2 from '@/components/ui/Input2';
import Textarea2 from '@/components/ui/Textarea2';
import CategorySelect from '@/components/ui/CategorySelect';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

function PropertyEditGeneral() {
  const navigate = useNavigate();
  const {
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
  } = useContext(ListingContext);

  const handleSubmit = () => {
    if (newImages.length > 0) {
      uploadImagesMutation.mutate();
    } else {
      updateListingMutation.mutate();
    }
  };

  return (
    <div className="py-4 max-sm:px-4">
      {status === 'success' && (
        <>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Photos:">
              <div>
                Photos .{' '}
                <span className="font-medium">
                  {listingFormData?.images?.length}/4
                </span>{' '}
                - Changes will be reflected in your listing
              </div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <ImagesEdit
                images={listingFormData?.images || []}
                newImages={newImages}
                setNewImages={setNewImages}
                removedImages={removedImages}
                setRemovedImages={setRemovedImages}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Title:">
              <div>Edit the title of your listing</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <Input2
                value={listingFormData?.title}
                onChange={(e) =>
                  setListingFormData({
                    ...listingFormData,
                    title: e.target.value,
                  })
                }
                placeholder={listing?.title}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Description:">
              <div>Edit the description of your listing</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <Textarea2
                value={listingFormData?.description}
                onChange={(e) =>
                  setListingFormData({
                    ...listingFormData,
                    description: e.target.value,
                  })
                }
                placeholder={listing.description}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Price:">
              <div>Set the price of your listing</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <Input2
                inputMode="decimal"
                value={
                  listingFormData?.price ? `${listingFormData?.price}DH` : ''
                }
                min={0}
                max={10000}
                onChange={(e) => {
                  const value = e.target.value
                    .replace('DH', '')
                    .replace(/[^0-9]/g, '');
                  value <= 10000 &&
                    setListingFormData({ ...listingFormData, price: value });
                }}
                step={50}
                placeholder={listing.price + 'DH'}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Category:">
              <div>Help users to find your listing more easily</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <CategorySelect
                value={listingFormData?.category}
                handleChange={(value) =>
                  setListingFormData({ ...listingFormData, category: value })
                }
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Rooms:">
              <div>Enter the number of rooms</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <Input2
                type="number"
                max={30}
                min={1}
                value={listingFormData?.rooms}
                onChange={(e) =>
                  e.target.value <= 30 &&
                  setListingFormData({
                    ...listingFormData,
                    rooms: e.target.value,
                  })
                }
                placeholder={listing?.rooms}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <SettingsSectionWrapper>
            <SettingsSectionTitle title="Bathrooms:">
              <div>Enter the number of bathrooms</div>
            </SettingsSectionTitle>
            <SettingSectionBody>
              <Input2
                type="number"
                max={30}
                min={1}
                value={listingFormData?.bathrooms}
                onChange={(e) =>
                  e.target.value <= 30 &&
                  setListingFormData({
                    ...listingFormData,
                    bathrooms: e.target.value,
                  })
                }
                placeholder={listing?.bathrooms}
              />
            </SettingSectionBody>
          </SettingsSectionWrapper>
          <div className="mt-12 mb-24 flex items-center justify-end xl:pr-20">
            <Button
              handleClick={() => navigate('../../properties')}
              className="mr-1 bg-gray-500 px-4 py-3 rounded-md"
            >
              Cancel
            </Button>
            <Button
              className="bg-gray-900 text-white py-3 px-4 rounded-md"
              handleClick={handleSubmit}
            >
              Save Changes
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyEditGeneral;
