import MoreHorizontalIcon from '@/icons/more-horizontal-stroke-rounded';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';

function SortDropdown({ sortOptions, selectedSort, setSelectedSort }) {


  return (
    <div className="dropdown dropdown-end px-2">
      <div tabIndex={0} role="button" className="h-[3rem] flex items-center">
        <MoreHorizontalIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 mt-2 text-base gap-1"
      >
        <p className="px-1">Sort by:</p>
        {sortOptions.map((option) => (
          <li key={uuidV4()}>
            <button
              role='button'
              onClick={() => setSelectedSort(option)}
              className={selectedSort === option ? 'active rounded-md' : 'rounded-md'}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

SortDropdown.propTypes = {
  sortOptions: PropTypes.array.isRequired,
  selectedSort: PropTypes.object.isRequired,
  setSelectedSort: PropTypes.func.isRequired,
};

export default SortDropdown;
