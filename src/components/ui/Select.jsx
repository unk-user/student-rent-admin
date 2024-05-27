import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';

function Select({
  className,
  name,
  heightClass,
  inputClass,
  placeholder,
  label,
  options,
  onChange,
  selected,
}) {
  const defaultClassName = 'flex flex-col';

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;
  return (
    <div className={combinedClassName}>
      <label htmlFor={name} className={`mb-1 relative `}>
        {label}
      </label>
      <select
        className={`select select-bordered text-xl ${heightClass || ''} ${inputClass || ''}`}
        id={name}
        onChange={onChange}
        value={selected || placeholder}
      >
        {placeholder && (
          <option disabled value={placeholder} className="hidden">
            {placeholder}
          </option>
        )}
        {options &&
          options.map((option) => (
            <option key={uuidV4()} value={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </option>
          ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  selected: PropTypes.any,
  heightClass: PropTypes.string,
  inputClass: PropTypes.string,
};

export default Select;
