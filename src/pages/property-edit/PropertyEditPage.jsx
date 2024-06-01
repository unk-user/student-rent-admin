import SettingsLayout from '@/components/SettingsLayout/SettingsLayout';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Settings02Icon from '@/icons/settings-02-stroke-rounded';
import { v4 as uuidV4 } from 'uuid';
import SettingsHeaderWrapper from '@/components/SettingsLayout/SettingsHeaderWrapper';
import DocumentValidationIcon from '@/icons/document-validation-stroke-rounded';
import Location03Icon from '@/icons/location-03-stroke-rounded';
import UserSettings01Icon from '@/icons/user-settings-01-stroke-rounded';
import { Tabs, Tab } from '@mui/material';
import ListingProvider from './context/ListingProvider';

const possiblePaths = ['general', 'location', 'tenants'];
const paths = [
  {
    title: 'General',
    icon: <DocumentValidationIcon size={'1.3rem'} />,
  },
  {
    title: 'Location',
    icon: <Location03Icon size={'1.3rem'} />,
  },
  {
    title: 'Tenants',
    icon: <UserSettings01Icon size={'1.3rem'} />,
  },
];

function PropertyEditPage() {
  const pathname = useLocation().pathname.split('/');
  const location = pathname[pathname.length - 1];
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleNavChange = (event, newValue) => {
    setSelectedTab(newValue);
    navigate(`./${possiblePaths[newValue]}`);
  };

  useEffect(() => {
    setSelectedTab(possiblePaths.indexOf(location));
  }, [setSelectedTab, location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!possiblePaths.includes(location)) {
      navigate('general', { replace: true });
    }
  }, []);

  return (
    <SettingsLayout>
      <SettingsHeaderWrapper
        header="Edit Property"
        icon={<Settings02Icon size={'2rem'} />}
      >
        <Tabs
          value={selectedTab}
          onChange={handleNavChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'black',
            },
            '& .MuiTabs-scroller': {
              height: '4rem',
            },
            '& .MuiTab-root': {
              height: '4rem',
            },
          }}
          style={{ minHeight: 'unset' }}
        >
          {paths.map((path) => (
            <Tab
              disableFocusRipple
              disableRipple
              key={uuidV4()}
              label={path.title}
              icon={path.icon}
              iconPosition="start"
              sx={{
                textTransform: 'none',
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontSize: '1.1rem',
                color: 'inherit',
                '&.Mui-selected': {
                  color: 'inherit',
                },
                padding: '0 1rem',
                '&.MuiTab-root': {
                  height: '4rem',
                  minHeight: 'unset',
                },
              }}
            />
          ))}
        </Tabs>
      </SettingsHeaderWrapper>
      <ListingProvider>
        <Outlet />
      </ListingProvider>
    </SettingsLayout>
  );
}

export default PropertyEditPage;
