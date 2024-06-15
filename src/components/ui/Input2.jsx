import PropTypes from 'prop-types';

function Input2({ type, value, onChange, placeholder, ...props }) {
  return (
    <input
      type={type || 'text'}
      className="input input-bordered rounded-lg py-2 pl-4 px-5 h-[3.25rem] w-full"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

Input2.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default Input2;
