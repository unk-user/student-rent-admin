import DataListingStat from '@/components/DataListing/DataListingStat';
import DataListingWrapper from '@/components/DataListing/DataListingWrapper';
import Button from '@/components/ui/Button';
import useQueryAuth from '@/hooks/useQueryAuth';
import { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DeleteListingModal from './DeleteListingModal';
import AuthContext from '@/context/AuthProvider';
import { Pagination, PaginationItem } from '@mui/material';
import SortDropdown from './SortDropdown';
import DataListingStatSkeleton from '@/components/DataListing/DataListingStatSkeleton';

const sortOptions = [
  {
    name: 'Newest',
    field: 'createdAt',
    value: -1,
  },
  {
    name: 'Oldest',
    field: 'createdAt',
    value: 1,
  },
  {
    name: 'Lowest Price',
    field: 'price',
    value: 1,
  },
  {
    name: 'Highest Price',
    field: 'price',
    value: -1,
  },
];

function PropertiesPage() {
  const page = Number(useSearchParams()[0].get('page') || 1);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `/landlord/listings?page=${page}&limit=6&sortField=${
    selectedSort.field
  }&sortDirection=${
    selectedSort.value !== undefined ? JSON.stringify(selectedSort.value) : '-1'
  }`;
  const { data, status, refetch } = useQueryAuth({
    queryKey: ['listings', url],
    url: url,
  });

  const handleClick = () => {
    navigate('../properties/insert/step1');
  };

  return (
    <main className="h-full relative flex flex-col">
      <section className="flex item-center z-20 bg-gray-300 pt-4 px-4 xl:px-12">
        <h4>
          Listings <span className="text-lg">({data?.listings?.length})</span>
        </h4>
        <Pagination
          count={data?.totalPages}
          page={page}
          onChange={(e, p) => {
            navigate(`?page=${p}`);
          }}
          hideNextButton
          hidePrevButton
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="ml-auto mr-4"
          shape="rounded"
          renderItem={(item) => <PaginationItem {...item} />}
        />
        <Button
          handleClick={handleClick}
          className="bg-slate-950 text-gray-200 h-12"
        >
          <span className="mr-2">+</span>
          Add Listing
        </Button>
        <SortDropdown
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
      </section>
      <div className="flex">
        <DeleteListingModal refetch={refetch} auth={auth} />
        <DataListingWrapper>
          {status === 'success'
            ? data?.listings.map((listing) => (
                <DataListingStat
                  key={uuidV4()}
                  listing={listing}
                  refetch={refetch}
                />
              ))
            : status === 'pending' &&
              [...new Array(6)].map((_, i) => (
                <DataListingStatSkeleton key={i} />
              ))}
        </DataListingWrapper>
      </div>
      <div className="p-4 mt-auto">
        <Pagination
          count={data?.totalPages}
          page={page}
          onChange={(e, p) => {
            navigate(`?page=${p}`);
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="ml-auto mr-4"
          shape="rounded"
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </div>
    </main>
  );
}

export default PropertiesPage;
