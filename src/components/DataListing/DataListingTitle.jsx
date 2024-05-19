import PropTypes from 'prop-types';

function DataListingTitle({ children }) {
  return <div className='text-sm'>{children}</div>;
}

DataListingTitle.propTypes = {
  children: PropTypes.any,
};

export default DataListingTitle;
