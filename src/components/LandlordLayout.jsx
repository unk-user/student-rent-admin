import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';
import Header from './Header';
import DataNavbarWrapper from './DataNavbarWrapper';
import { useMemo } from 'react';
import useQueryAuth from '../../hooks/useQueryAuth';
import DataNavbar from './DataNavbar';

function LandlordLayout() {
  const isMobile = useMediaQuery('(max-width: 768px');
  const location = useLocation();
  const url = useMemo(() => {
    switch (location.pathname.split('/')[2]) {
      case 'properties':
        return '/listings';
    }
    return null;
  }, [location]);

  const { data, status, error } = useQueryAuth({
    queryKey: ['dashboard', url],
    url: url ? `landlord${url}` : undefined,
    role: 'landlord',
  });

  return (
    <article className="h-max relative flex md:ml-[76px]">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      {location.pathname.split('/')[2] !== 'edit' && (
        <DataNavbarWrapper>
          <DataNavbar
            status={status}
            data={data}
            location={location.pathname.split('/')[2]}
          />
        </DataNavbarWrapper>
      )}
      <div className="flex-1 flex flex-col rounded-r-xl max-md:rounded-t-xl min-h-screen">
        <Header />
        <Outlet />
      </div>
    </article>
  );
}

export default LandlordLayout;
