import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';
import Header from './Header';

function LandlordLayout() {
  const isMobile = useMediaQuery('(max-width: 768px');

  return (
    <article className="h-max relative flex md:ml-[76px]">
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className="flex-1 flex flex-col rounded-r-xl max-md:rounded-t-xl min-h-screen">
        <Header />
        <Outlet />
      </div>
    </article>
  );
}

export default LandlordLayout;
