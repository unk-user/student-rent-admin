import DataListingStat from '@/components/DataListing/DataListingStat';
import DataListingWrapper from '@/components/DataListing/DataListingWrapper';
import Button from '@/components/ui/Button';
import useQueryAuth from '@/hooks/useQueryAuth';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function PropertiesPage() {
  const navigate = useNavigate();
  const url = `/landlord/listings`;
  const { data, status } = useQueryAuth({
    queryKey: ['listings', url],
    url: '/landlord/listings',
  });

  const handleClick = () => {
    navigate('insert/step1');
  };

  return (
    <main className="flex-1 relative gap-2">
      <section className="flex item-center px-4 p-4 xl:px-12 pb-6 border-b border-black">
        <h3>Property listing</h3>
        <Button
          handleClick={handleClick}
          className="ml-auto bg-slate-950 text-gray-200"
        >
          Create Listing
        </Button>
      </section>
      <div className="flex">
        <DataListingWrapper>
          {status === 'success' &&
            data?.listings.map((listing) => (
              <DataListingStat key={uuidV4()} listing={listing} />
            ))}
        </DataListingWrapper>
      </div>
    </main>
  );
}

export default PropertiesPage;
