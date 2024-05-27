import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';
import Header from './Header';
import useQueryAuth from '@/hooks/useQueryAuth';

function LandlordLayout() {
  const isMobile = useMediaQuery('(max-width: 767px');
  const { status } = useQueryAuth({ queryKey: ['auth'], url: '/me' });

  return status === 'success' ? (
    <article className="h-max relative flex md:ml-[76px]">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className="flex-1 flex flex-col rounded-r-xl max-md:rounded-t-xl min-h-screen max-md:min-h-[calc(100vh-64px)] max-md:mb-[64px]">
        <Header />
        <Outlet />
      </div>
    </article>
  ) : (
    status === 'pending' && (
      <span className="absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 loading loading-dots loading-lg"></span>
    )
  );
}

export default LandlordLayout;
