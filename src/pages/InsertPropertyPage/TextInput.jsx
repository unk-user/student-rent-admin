import PropTypes from 'prop-types';

function TextInput({ className, value, handleChange, label }) {
  return (
    <div className={`flex flex-col text-xl ${className}`}>
      <label htmlFor="address-input" className="mb-2">
        {label}
      </label>
      <input
        id="address-input"
        value={value}
        onChange={handleChange}
        className="bg-transparent border-b-2 py-4 border-black rounded-none outline-none border-t-0 border-x-0 text-xl"
      />
    </div>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

export default TextInput;
