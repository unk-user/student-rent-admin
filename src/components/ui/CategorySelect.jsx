import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';
import PermanentJobIcon from '@/icons/permanent-job-stroke-rounded';
import House01Icon from '@/icons/house-01-stroke-rounded';
import BedBunkIcon from '@/icons/bed-bunk-stroke-rounded';
import BedDoubleIcon from '@/icons/bed-double-stroke-rounded';

const categories = [
  {
    label: 'appartment',
    icon: <PermanentJobIcon width={'2.1rem'} height={'2.1rem'} />,
  },
  { label: 'studio', icon: <House01Icon width={'2.1rem'} height={'2.1rem'} /> },
  { label: 'room', icon: <BedDoubleIcon width={'2.1rem'} height={'2.1rem'} /> },
  { label: 'dorm', icon: <BedBunkIcon width={'2.1rem'} height={'2.1rem'} /> },
];

function CategorySelect({ value, handleChange }) {
  return (
    <div>
      <h6 className="mb-1">Category</h6>
      <div role="radiogroup" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {categories.map((category) => (
          <div key={uuidV4()}>
            <button
              type="button"
              className={`h-24 w-full border-2 rounded-lg flex items-center outline-offset-1 ${
                value === category.label && 'outline'
              } p-4`}
              onClick={() => handleChange(category.label)}
            >
              <div className="flex flex-col gap-1">
                {category.icon}
                {category.label[0].toLocaleUpperCase() +
                  category.label.slice(1)}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

CategorySelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default CategorySelect;
