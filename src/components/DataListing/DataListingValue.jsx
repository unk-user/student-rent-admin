import PropTypes from 'prop-types';

function DataListingValue({ children }) {
  return <h6>{children}</h6>;
}

DataListingValue.propTypes = {
  children: PropTypes.any,
};

export default DataListingValue;
