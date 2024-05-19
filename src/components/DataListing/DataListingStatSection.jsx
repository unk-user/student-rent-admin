import PropTypes from 'prop-types';

function DataListingStatSection({ cols = 1, children, className }) {
  return (
    <div
      className={`grid grid-rows-2 grid-cols-${cols} gap-x-4 gap-y-2 p-2 ${className}`}
    >
      {children}
    </div>
  );
}

DataListingStatSection.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default DataListingStatSection;
