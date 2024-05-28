import DataListingStat from '@/components/DataListing/DataListingStat';
import DataListingWrapper from '@/components/DataListing/DataListingWrapper';
import Button from '@/components/ui/Button';
import useQueryAuth from '@/hooks/useQueryAuth';
import { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import DeleteListingModal from './DeleteListingModal';
import AuthContext from '@/context/AuthProvider';

function PropertiesPage() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `/landlord/listings`;
  const { data, status, refetch } = useQueryAuth({
    queryKey: ['listings', url],
    url: '/landlord/listings',
  });

  const handleClick = () => {
    navigate('insert/step1');
  };

  return (
    <main className="flex-1 relative gap-2">
      <section className="flex item-center sticky z-20 bg-gray-300 top-0 px-4 p-4 xl:px-12 pb-6 border-b border-black">
        <h3>Property listing</h3>
        <Button
          handleClick={handleClick}
          className="ml-auto bg-slate-950 text-gray-200"
        >
          Create Listing
        </Button>
      </section>
      <div className="flex">
        <DeleteListingModal refetch={refetch} auth={auth}/>
        <DataListingWrapper>
          {status === 'success' &&
            data?.listings.map((listing) => (
              <DataListingStat
                key={uuidV4()}
                listing={listing}
                refetch={refetch}
              />
            ))}
        </DataListingWrapper>
      </div>
    </main>
  );
}

export default PropertiesPage;
