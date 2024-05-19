import PropTypes from 'prop-types';
import DataListingStatSection from './DataListingStatSection';
import DataListingTitle from './DataListingTitle';
import DataListingValue from './DataListingValue';
import FillProgress from '../ui/FillProgress';
import MoreHorizontalIcon from '@/icons/more-horizontal-stroke-rounded';
import Rocket01Icon from '@/icons/rocket-01-stroke-rounded';
import PencilEdit01Icon from '@/icons/pencil-edit-01-stroke-rounded';
import { Link } from 'react-router-dom';

function DataListingStat({ listing }) {
  return (
    <div className="flex border-2 border-base-100 rounded-md xl:pr-2">
      <div className="bg-indigo-400 rounded-l-md h-32 aspect-square max-xl:h-full"></div>
      <div className="grid grid-cols-8 flex-1 max-xl:grid-cols-5 max-lg:grid-cols-2">
        <div className="border-r-2 border-base-100">
          <DataListingStatSection className="text-ellipsis truncate flex-1 h-full">
            <div>
              <DataListingValue>{listing.title}</DataListingValue>
            </div>
            <div>
              <DataListingValue>
                {listing.category[0].toUpperCase() + listing.category.slice(1)}
              </DataListingValue>
              <DataListingTitle>Category</DataListingTitle>
            </div>
          </DataListingStatSection>
        </div>
        <DataListingStatSection
          cols={2}
          className="col-span-3 max-lg:hidden max-xl:col-span-3 border-r-2 border-base-100"
        >
          <div>
            <DataListingValue>
              {listing.address + ', ' + listing.city}
            </DataListingValue>
            <DataListingTitle>Address</DataListingTitle>
          </div>
          <div>
            <DataListingValue>
              {listing.createdAt.split('T')[0]}
            </DataListingValue>
            <DataListingTitle>Listed at</DataListingTitle>
          </div>
          <div>
            <DataListingValue>
              <span className="text-green-600">{listing.price}DH</span>
            </DataListingValue>
            <DataListingTitle>Price</DataListingTitle>
          </div>
          <div>
            <DataListingValue>ADD LATER</DataListingValue>
            <DataListingTitle>Area</DataListingTitle>
          </div>
        </DataListingStatSection>
        <DataListingStatSection className="col-span-2 max-xl:hidden border-r-2 border-base-100">
          <div>
            <DataListingValue>
              {listing.students.length} Residents
            </DataListingValue>
            <DataListingTitle>
              Full list <strong>view</strong>
            </DataListingTitle>
          </div>
          <div>
            <DataListingValue>Fill Progress</DataListingValue>
            <FillProgress
              total={listing.rooms}
              filled={listing.students.length}
            />
          </div>
        </DataListingStatSection>
        <DataListingStatSection
          className="col-span-2 max-xl:col-span-1"
          cols={2}
        >
          <div>
            <DataListingValue>
              <div className="rounded-full w-3 h-3 bg-green-600 inline-block mr-1" />
              Listed
            </DataListingValue>
            <DataListingTitle>Status</DataListingTitle>
          </div>
          <div className="ml-auto">
            <div className={`dropdown dropdown-end`}>
              <MoreHorizontalIcon role="button" tabIndex={0} />
              {true && (
                <ul
                  tabIndex={0}
                  className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-md w-52"
                >
                  <li>
                    <Link to={`edit/${listing._id}`} className="px-2">
                      <PencilEdit01Icon />
                      Edit listing
                    </Link>
                  </li>
                  <li>
                    <a className="px-2">
                      <Rocket01Icon />
                      Boost Listing
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="xl:hidden col-span-2">
            <DataListingValue>Fill Progress</DataListingValue>
            <FillProgress
              total={listing.rooms}
              filled={listing.students.length}
            />
          </div>
        </DataListingStatSection>
      </div>
    </div>
  );
}

DataListingStat.propTypes = {
  listing: PropTypes.object,
};

export default DataListingStat;
