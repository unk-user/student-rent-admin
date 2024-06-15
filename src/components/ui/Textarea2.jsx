import PropTypes from 'prop-types';
function Textarea2({ value, onChange, placeholder, ...props }) {
  return (
    <textarea
      cols={props.cols || '30'}
      rows={props.rows || '10'}
      onChange={onChange}
      placeholder={placeholder}
      className='textarea textarea-bordered resize-none w-full text-base h-24'
      value={value}
    ></textarea>
  );
}

Textarea2.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  cols: PropTypes.any,
  rows: PropTypes.any,
};

export default Textarea2;
