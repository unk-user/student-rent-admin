import PropTypes from 'prop-types';

function SettingsLayout({ children }) {
  return <main className="flex flex-col h-full sm:px-8 md:px-12 lg:px-20 xl:px-48">{children}</main>;
}

SettingsLayout.propTypes = {
  children: PropTypes.node,
};

export default SettingsLayout;
