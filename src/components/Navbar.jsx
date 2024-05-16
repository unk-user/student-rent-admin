import { Link, NavLink } from 'react-router-dom';
import Logout02Icon from '@/icons/logout-02-stroke-rounded';
import DashboardSquare02Icon from '@/icons/dashboard-square-02-stroke-rounded';
import Comment01Icon from '@/icons/comment-01-stroke-rounded';
import FolderShared01Icon from '@/icons/folder-shared-01-stroke-rounded (1)';
import House05Icon from '@/icons/house-05-stroke-rounded';
import Tooltip from '@mui/material/Tooltip';
import { Zoom } from '@mui/material';

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

  return (
    <aside className="z-10 fixed top-0 left-0 bottom-0">
      <div className="bg-gray-600 w-[76px] h-full flex flex-col items-center py-4">
        <div className="text-2xl text-center">LOGO</div>
        <ul className="flex flex-col gap-6 mt-16">
          <li>
            <Tooltip
              title="dashboard"
              placement="right"
              slotProps={tooltipSlotProps}
              componentsProps={tooltipComponentProps}
              TransitionComponent={Zoom}
            >
              <NavLink to="">
                <DashboardSquare02Icon />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="messages"
              placement="right"
              slotProps={tooltipSlotProps}
              componentsProps={tooltipComponentProps}
              TransitionComponent={Zoom}
            >
              <NavLink to="messages">
                <Comment01Icon />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="properties"
              placement="right"
              slotProps={tooltipSlotProps}
              componentsProps={tooltipComponentProps}
              TransitionComponent={Zoom}
            >
              <NavLink to="properties">
                <House05Icon />
              </NavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="tenants"
              placement="right"
              slotProps={tooltipSlotProps}
              componentsProps={tooltipComponentProps}
              TransitionComponent={Zoom}
            >
              <NavLink to="tenants">
                <FolderShared01Icon />
              </NavLink>
            </Tooltip>
          </li>
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
