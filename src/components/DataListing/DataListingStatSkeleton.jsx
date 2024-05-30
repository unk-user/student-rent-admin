import DataListingStatSection from './DataListingStatSection';

function DataListingStatSkeleton() {
  return (
    <div className="flex border-2 border-base-100 rounded-md xl:pr-2">
      <div className="h-32 aspect-square p-1">
        <div className="skeleton w-full h-full rounded-sm bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-8 flex-1 max-xl:grid-cols-5 max-lg:grid-cols-2">
        <div className="border-r-2 border-base-100">
          <DataListingStatSection className="text-ellipsis truncate flex-1 h-full">
            <div>
              <div className="skeleton h-6 w-full rounded-md bg-gray-400"></div>
              <div className="skeleton h-6 w-2/3 rounded-md bg-gray-400 mt-1"></div>
            </div>
            <div className="mt-auto mb-2">
              <div className="skeleton h-6 w-full rounded-md bg-gray-400"></div>
            </div>
          </DataListingStatSection>
        </div>
        <DataListingStatSection
          cols={2}
          className="col-span-3 max-lg:hidden max-xl:col-span-3 border-r-2 border-base-100"
        >
          <div>
            <div className="skeleton h-6 rounded-md bg-gray-400"></div>
            <div className="skeleton h-6 w-2/3 rounded-md mt-1 bg-gray-400"></div>
          </div>
          <div>
            <div className="skeleton h-6 w-2/3 rounded-md bg-gray-400"></div>
          </div>
          <div className="mt-auto mb-2">
            <div className="skeleton h-6 w-2/3 rounded-md bg-gray-400"></div>
          </div>
          <div className="mt-auto mb-1">
            <div className="skeleton h-6 w-1/3 rounded-md bg-gray-400"></div>
          </div>
        </DataListingStatSection>
        <DataListingStatSection className="col-span-2 max-xl:hidden border-r-2 border-base-100">
          <div>
            <div className="skeleton h-6 rounded-md bg-gray-400"></div>
          </div>
          <div className="mb-2 mt-auto">
            <div className="skeleton h-6 w-1/3 rounded-md bg-gray-400"></div>
          </div>
        </DataListingStatSection>
        <DataListingStatSection className="col-span-1" cols={1}>
          <div>
            <div className="skeleton h-6 w-full rounded-md bg-gray-400"></div>
          </div>
          <div className="mt-auto mb-2">
            <div className="skeleton h-6 w-2/3 rounded-md bg-gray-400"></div>
          </div>
        </DataListingStatSection>
      </div>
    </div>
  );
}

export default DataListingStatSkeleton;
