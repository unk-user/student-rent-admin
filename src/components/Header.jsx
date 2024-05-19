import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';

function Header() {
  const location = useLocation();
  const pathArray = useMemo(() => {
    const array = location.pathname.split('/');
    array.shift();
    return array;
  }, [location]);

  return (
    <header className="bg-gray-300 border-b border-gray-500 sticky top-0 z-30 flex items-center gap-6 max-md:gap-4 px-8 max-md:px-2">
      <div className="breadcrumbs">
        <ul>
          {pathArray?.map((item, index) => {
            if (index < 3)
              return (
                <li key={uuidV4()}>
                  <Link
                    to={index === 0 ? `/${item}` : index === 1 ? item : '#'}
                  >
                    {item[0].toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              );
          })}
        </ul>
      </div>
      <Link className="ml-auto link link-hover">Requests</Link>
      <div className="dropdown dropdown-hover dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mt-[6px]"
        >
          <div className="w-12 rounded-full bg-green-300"></div>
        </div>
        <ul
          tabIndex={0}
          className="pt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
