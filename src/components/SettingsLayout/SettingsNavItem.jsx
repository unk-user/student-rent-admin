import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SettingsNavItem({ title, to, active, icon }) {
  return (
    <Link
      to={`./${to}`}
      className={`text-lg border-b-2 py-4 flex items-center gap-1 ${
        active ? 'text-black font-medium border-black' : 'border-transparent'
      }`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

SettingsNavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  active: PropTypes.bool,
  icon: PropTypes.node,
};

export default SettingsNavItem;
