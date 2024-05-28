import { Link, NavLink } from 'react-router-dom';
import Logout02Icon from '@/icons/logout-02-stroke-rounded';
import DashboardSquare02Icon from '@/icons/dashboard-square-02-stroke-rounded';
import Comment01Icon from '@/icons/comment-01-stroke-rounded';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import House05Icon from '@/icons/house-05-stroke-rounded';
import Tooltip from '@mui/material/Tooltip';
import { Zoom } from '@mui/material';
import { v4 as uuidV4 } from 'uuid';
import { useLocation } from 'react-router-dom';

const links = [
  { title: 'Dashboard', icon: <DashboardSquare02Icon />, to: '' },
  { title: 'Messages', icon: <Comment01Icon />, to: 'messages' },
  { title: 'Properties', icon: <House05Icon />, to: 'properties' },
  { title: 'Tenants', icon: <FolderShared01Icon />, to: 'tenants' },
];

function Navbar() {
  const tooltipSlotProps = {
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  };

  const tooltipComponentProps = {
    tooltip: {
      style: { fontSize: '1rem' },
    },
  };

  //todo:codium please add a variable that holds the current second url name since the url now is ----/dashboard/{to-link}
  const currentUrl = useLocation().pathname.split('/')[2] || '';    
  
  return (
    <aside className="z-10 fixed top-0 left-0 bottom-0">
      <div className="bg-gray-600 w-[76px] h-full flex flex-col items-center py-4">
        <div className="text-2xl text-center">LOGO</div>
        <ul className="flex flex-col gap-4 mt-16">
          {links.map((link) => (
            <li key={uuidV4()}>
              <Tooltip
                title={link.title}
                placement="right"
                slotProps={tooltipSlotProps}
                componentsProps={tooltipComponentProps}
                TransitionComponent={Zoom}
              >
                <NavLink to={link.to}>
                  <div className={`p-2 rounded-md hover:bg-gray-700 ${currentUrl === link.to ? 'bg-gray-700' : ''}`} >
                    {link.icon}
                  </div>
                </NavLink>
              </Tooltip>
            </li>
          ))}
        </ul>
        <Tooltip
          title="logout"
          placement="right"
          slotProps={tooltipSlotProps}
          componentsProps={tooltipComponentProps}
          TransitionComponent={Zoom}
        >
          <Link className="mt-auto">
            <Logout02Icon />
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
}

export default Navbar;
