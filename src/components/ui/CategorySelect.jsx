import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';
import PermanentJobIcon from '@/icons/permanent-job-stroke-rounded';
import House01Icon from '@/icons/house-01-stroke-rounded';
import BedBunkIcon from '@/icons/bed-bunk-stroke-rounded';
import BedDoubleIcon from '@/icons/bed-double-stroke-rounded';
import RadioBox from './RadioBox';

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
      <div
        role="radiogroup"
        className="grid grid-cols-2 gap-1"
      >
        {categories.map((category) => (
          <div key={uuidV4()}>
            <RadioBox
              label={category.label}
              icon={category.icon}
              selectedValue={value}
              handleChange={handleChange}
            />
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
