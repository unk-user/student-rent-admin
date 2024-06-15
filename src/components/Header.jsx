import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import AuthContext from '@/context/AuthProvider';

const possiblePaths = [
  'dashboard',
  'properties',
  'insert',
  'messages',
  'tenants',
  'edit',
];

function Header() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  const pathArray = useMemo(() => {
    const array = location.pathname.split('/');
    array.shift();
    return array;
  }, [location]);

  const { data } = useQuery({ queryKey: ['auth', auth.accessToken] });

  return (
    <header className="bg-gray-300 border-b border-gray-500 flex items-center gap-6 max-md:gap-4 px-8 max-md:px-4">
      <div className="breadcrumbs">
        <ul>
          {pathArray?.map((item, index) => {
            if (index < 3 && possiblePaths.includes(item))
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
      <div className="dropdown dropdown-end z-30">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mt-[6px]"
        >
          <div className="avatar w-12">
            <div className="rounded-full bg-green-300">
              {data?.user.profilePicture && (
                <img src={data?.user.profilePicture.url} />
              )}
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="pt-1 px-1 z-[1] shadow menu dropdown-content bg-base-100 rounded-lg w-52 text-sm"
        >
          <li>
            <Link to="/dashboard/edit-profile">Profile</Link>
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
