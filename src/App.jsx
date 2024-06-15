import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Signup from './pages/signupPage/Signup';
import axios from 'axios';
import LandlordLayout from './components/LandlordLayout';
import PropertiesPage from './pages/property-details/PropertiesPage';
import PropertyEditPage from './pages/property-edit/PropertyEditPage';
import InsertPropertyForm from './pages/InsertPropertyPage/InsertPropertyForm';
import Step1 from './pages/InsertPropertyPage/Step1';
import Step2 from './pages/InsertPropertyPage/Step2';
import Step3 from './pages/InsertPropertyPage/Step3';
import Step4 from './pages/InsertPropertyPage/Step4';
import Step5 from './pages/InsertPropertyPage/Step5';
import Step6 from './pages/InsertPropertyPage/Step6';
import Publish from './pages/InsertPropertyPage/Publish';
import PropertyEditGeneral from './pages/property-edit/PropertyEditGeneral';
import ProfileEditPage from './pages/ProfileEdit/ProfileEditPage';

function App() {
  axios.defaults.withCredentials = true;

  const router = createBrowserRouter([
    {
      path: '/logout',
      element: <div>logout</div>,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <LandlordLayout />,
      children: [
        {
          path: '',
          element: <div>Nothing to overview for now</div>,
        },
        {
          path: 'edit-profile',
          element: <ProfileEditPage />,
        },
        {
          path: 'properties',
          element: <PropertiesPage />,
        },
        {
          path: 'properties/edit/:listingId',
          element: <PropertyEditPage />,
          children: [
            {
              path: 'general',
              element: <PropertyEditGeneral />,
            },
            {
              path: 'location',
              element: <div>Location</div>,
            },
            {
              path: 'tenants',
              element: <div>Tenants</div>,
            },
          ],
        },
        {
          path: 'properties/insert',
          element: <InsertPropertyForm />,
          children: [
            {
              path: 'step1',
              element: <Step1 />,
            },
            {
              path: 'step2',
              element: <Step2 />,
            },
            {
              path: 'step3',
              element: <Step3 />,
            },
            {
              path: 'step4',
              element: <Step4 />,
            },
            {
              path: 'step5',
              element: <Step5 />,
            },
            {
              path: 'step6',
              element: <Step6 />,
            },
            {
              path: 'publish',
              element: <Publish />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
