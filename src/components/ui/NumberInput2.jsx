import AddCircleIcon from '@/icons/add-circle-stroke-rounded';
import RemoveCircleIcon from '@/icons/remove-circle-stroke-rounded';
import PropTypes from 'prop-types';

function NumberInput2({
  label,
  value,
  minValue,
  maxValue,
  setValue,
  className,
}) {
  const handleClick = (type) => {
    if (type === 'increment' && value < maxValue) {
      setValue(value + 1);
    } else if (type === 'decrement' && value > minValue) {
      setValue(value - 1);
    }
  };

  return (
    <div className={`${className} text-xl flex border-2 rounded-xl h-16 px-2 items-center`}>
      <div>{label}</div>
      <div className="ml-auto flex items-center gap-2">
        <button onClick={() => handleClick('decrement')}>
          <RemoveCircleIcon size="2rem" />
        </button>
        <div className="w-4 text-center">{value}</div>
        <button onClick={() => handleClick('increment')}>
          <AddCircleIcon size="2rem" />
        </button>
      </div>
    </div>
  );
}

NumberInput2.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  setValue: PropTypes.func,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  className: PropTypes.string,
};

export default NumberInput2;
