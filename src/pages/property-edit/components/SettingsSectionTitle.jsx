import PropTypes from 'prop-types';

function SettingsSectionTitle({ title, children }) {
  return (
    <div className="max-lg:mb-4 lg:w-2/5">
      <h6>{title}</h6>
      <span className="text-gray-500">
        {children}
      </span>
    </div>
  );
}

SettingsSectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SettingsSectionTitle;
