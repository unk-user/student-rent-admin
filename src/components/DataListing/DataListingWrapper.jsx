import PropTypes from 'prop-types';

function DataListingWrapper({ children }) {
  return <section className="flex flex-col gap-2 m-4 xl:mx-12 w-full">{children}</section>;
}

DataListingWrapper.propTypes = {
  children: PropTypes.any,
};

export default DataListingWrapper;
