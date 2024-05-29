import PropTypes from 'prop-types';

function SettingsLayout({ children }) {
  return <main className="flex flex-col h-full sm:px-6 md:px-8 lg:px-12 xl:px-24">{children}</main>;
}

SettingsLayout.propTypes = {
  children: PropTypes.node,
};

export default SettingsLayout;
