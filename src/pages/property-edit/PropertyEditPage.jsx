import SettingsLayout from '@/components/SettingsLayout/SettingsLayout';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Settings02Icon from '@/icons/settings-02-stroke-rounded';
import { v4 as uuidV4 } from 'uuid';
import SettingsHeaderWrapper from '@/components/SettingsLayout/SettingsHeaderWrapper';
import SettingsNavItem from '@/components/SettingsLayout/SettingsNavItem';
import DocumentValidationIcon from '@/icons/document-validation-stroke-rounded';
import Location03Icon from '@/icons/location-03-stroke-rounded';
import UserSettings01Icon from '@/icons/user-settings-01-stroke-rounded';

const possiblePaths = ['general', 'location', 'tenants'];
const paths = [
  {
    to: 'general',
    title: 'General',
    icon: <DocumentValidationIcon size={'1.3rem'}/>
  },
  {
    to: 'location',
    title: 'Location',
    icon: <Location03Icon size={'1.3rem'}/>
  },
  {
    to: 'tenants',
    title: 'Tenants',
    icon: <UserSettings01Icon size={'1.3rem'}/>
  },
];

function PropertyEditPage() {
  const pathname = useLocation().pathname.split('/');
  const location = pathname[pathname.length - 1];
  const navigate = useNavigate();

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
        {paths.map((path) => (
          <SettingsNavItem
            key={uuidV4()}
            title={path.title}
            to={path.to}
            active={path.to === location}
            icon={path.icon}
          />
        ))}
      </SettingsHeaderWrapper>
      <Outlet />
    </SettingsLayout>
  );
}

export default PropertyEditPage;
