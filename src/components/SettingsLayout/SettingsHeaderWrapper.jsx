import PropTypes from 'prop-types';

function SettingsHeaderWrapper({ children, icon, header }) {
  return (
    <section className="flex flex-col max-sm:px-8 border-b border-gray-400">
      <div className="flex items-center mt-6 mb-2">
        <div className="rounded-full bg-gray-400 flex items-center justify-center p-[2px] mr-2">
          {icon}
        </div>
        <h4>{header}</h4>
      </div>
      <div className="flex items-center gap-6 text-gray-800">{children}</div>
    </section>
  );
}

SettingsHeaderWrapper.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  header: PropTypes.string,
};

export default SettingsHeaderWrapper;
