import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Signup from './pages/signupPage/Signup';
import axios from 'axios';
import LandlordLayout from './components/LandlordLayout';
import PropertiesPage from './pages/property-details/PropertiesPage';
import PropertyDetailsPage from './pages/property-details/PropertyDetailsPage';
import EditProperty from './pages/property-edit/EditProperty';

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
          path: 'properties',
          element: <PropertiesPage />
        },
        { path: 'properties/edit', element: <EditProperty /> },
        { path: 'properties/edit/:propertyId', element: <EditProperty /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
