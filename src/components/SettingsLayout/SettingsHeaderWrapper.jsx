import PropTypes from 'prop-types';

function SettingsHeaderWrapper({ children, header }) {

  return (
    <section className="flex flex-col max-sm:px-4 border-b border-gray-400">
      <div className="flex items-center mt-4">
        <h4>{header}</h4>
      </div>
      <div className="flex items-center gap-6 text-gray-800">{children}</div>
    </section>
  );
}

SettingsHeaderWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SettingsHeaderWrapper;
