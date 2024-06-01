import PropTypes from 'prop-types';

function SettingsSectionWrapper({ children }) {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:justify-between xl:pr-20 py-6 border-b-2 border-gray-400">
      {children}
    </section>
  );
}

SettingsSectionWrapper.propTypes = {
  children: PropTypes.node,
};

export default SettingsSectionWrapper;
