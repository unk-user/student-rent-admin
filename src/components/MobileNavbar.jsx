import { NavLink } from 'react-router-dom';
import DashboardSquare02Icon from '@/icons/dashboard-square-02-stroke-rounded';
import Comment01Icon from '@/icons/comment-01-stroke-rounded';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import House05Icon from '@/icons/house-05-stroke-rounded';

function MobileNavbar() {
  return (
    <nav className="bg-gray-600 z-30 h-[64px] fixed bottom-0 left-0 right-0 flex items-center justify-evenly px-4">
      <NavLink to="">
        <DashboardSquare02Icon width={30} height={30} />
      </NavLink>
      <NavLink to="messages">
        <Comment01Icon width={30} height={30} />
      </NavLink>
      <NavLink to="properties">
        <House05Icon width={30} height={30} />
      </NavLink>
      <NavLink to="tenants">
        <FolderShared01Icon width={30} height={30} />
      </NavLink>
    </nav>
  );
}

export default MobileNavbar;
