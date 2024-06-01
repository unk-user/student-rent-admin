import PropTypes from 'prop-types';

function DataListingValue({ children }) {
  return <div>{children}</div>;
}

DataListingValue.propTypes = {
  children: PropTypes.any,
};

export default DataListingValue;
