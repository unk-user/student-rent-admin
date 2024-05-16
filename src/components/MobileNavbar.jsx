import { NavLink } from 'react-router-dom';
import DashboardSquare02Icon from '@/icons/dashboard-square-02-stroke-rounded';
import Comment01Icon from '@/icons/comment-01-stroke-rounded';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import House05Icon from '@/icons/house-05-stroke-rounded';

function MobileNavbar() {
  return (
    <nav className="bg-gray-600 z-30 h-[64px] fixed bottom-2 left-2 right-2 rounded-lg flex items-center justify-evenly px-12">
      <NavLink to="">
        <DashboardSquare02Icon />
      </NavLink>
      <NavLink to="messages">
        <Comment01Icon />
      </NavLink>
      <NavLink to="properties">
        <House05Icon />
      </NavLink>
      <NavLink to="tenants">
        <FolderShared01Icon />
      </NavLink>
    </nav>
  );
}

export default MobileNavbar;
