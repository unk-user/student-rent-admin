import PropTypes from 'prop-types'

function RadioBox({ selectedValue, label, icon, handleChange }) {
  return (
    <button
      type="button"
      className={`h-32 max-sm:h-28 w-full border-2 hover:outline transition-all rounded-lg flex max-sm:px-8 items-center outline-offset-1 ${
        selectedValue === label && 'outline'
      } p-4`}
      onClick={() => handleChange(label)}
    >
      <div className="flex flex-col gap-1 text-lg">
        {icon}
        {label[0].toLocaleUpperCase() + label.slice(1)}
      </div>
    </button>
  );
}

RadioBox.propTypes = {
  selectedValue: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.any,
  handleChange: PropTypes.func
}

export default RadioBox;
