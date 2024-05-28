import { NavLink } from 'react-router-dom';
import DashboardSquare02Icon from '@/icons/dashboard-square-02-stroke-rounded';
import Comment01Icon from '@/icons/comment-01-stroke-rounded';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import House05Icon from '@/icons/house-05-stroke-rounded';

function MobileNavbar() {
  return (
    <nav className="bg-gray-600 z-30 h-[64px] pb-4 fixed bottom-0 text-black left-0 right-0 flex items-center justify-evenly px-4">
      <NavLink to="" className="relative">
        <DashboardSquare02Icon width={30} height={30} />
        <span className="absolute left-1/2 -translate-x-1/2">Dashboard</span>
      </NavLink>
      <NavLink to="messages" className=" relative">
        <Comment01Icon width={30} height={30} />
        <span className="absolute left-1/2 -translate-x-1/2">Messages</span>
      </NavLink>
      <NavLink to="properties" className="relative">
        <House05Icon width={30} height={30} />
        <span className="absolute left-1/2 -translate-x-1/2"> Properties </span>
      </NavLink>
      <NavLink to="tenants" className="relative">
        <FolderShared01Icon width={30} height={30} />
        <span className="absolute left-1/2 -translate-x-1/2"> Tenants </span>
      </NavLink>
    </nav>
  );
}

export default MobileNavbar;
