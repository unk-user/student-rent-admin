import { useNavigate, useParams } from 'react-router-dom';
import useQueryAuth from '@/hooks/useQueryAuth';
import Button from '@/components/ui/Button';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import ProfileIcon from '@/icons/profile-stroke-rounded';
import NavigationButton from '@/components/ui/NavigationButton';
import { useState } from 'react';
import PropertyDetails from './PropertyDetails';

function PropertyDetailsPage() {
  const { propertyId } = useParams();
  const [option, setOption] = useState('details');
  const navigate = useNavigate();

  const handleOptionChange = (newOption) => {
    setOption(newOption);
  };

  const editProperty = () => {
    navigate(`/landlord/edit/${propertyId}`);
  };

  const url = `landlord/listings/${propertyId}`;

  const { data, status } = useQueryAuth({
    queryKey: ['property-details', propertyId],
    role: 'landlord',
    url,
  });

  return (
    <>
      <div className="flex items-center px-8 border-b border-black">
        <div className="flex items-stretch h-full gap-1">
          <NavigationButton handleClick={() => handleOptionChange('details')}>
            <ProfileIcon width={24} height={24} />
            <span className="mt-1">Details</span>
          </NavigationButton>
          <NavigationButton handleClick={() => handleOptionChange('tenants')}>
            <FolderShared01Icon width={24} height={24} />
            <span className="mt-1">Tenants</span>
          </NavigationButton>
        </div>
        <div className="ml-auto py-2">
          <Button
            handleClick={editProperty}
            className=" bg-cyan-600 text-white"
          >
            Edit Post
          </Button>
        </div>
      </div>
      <section className="flex-1 flex relative px-4 py-2 lg:px-16 lg:py-4">
        {status === 'pending' ? (
          <span className="loading loading-dots loading-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
        ) : status === 'success' && option === 'details' ? (
          <PropertyDetails listing={data.rentalListing} />
        ) : (
          <div>Hey</div>
        )}
      </section>
    </>
  );
}

export default PropertyDetailsPage;
