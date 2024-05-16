import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

function DataNavbar({ status, data, location }) {
  const navigate = useNavigate();

  if (status === 'success' && location === 'properties') {
    const handleClick = () => {
      navigate('edit');
    }
    return (
      <>
        <Button className="mb-2" handleClick={handleClick}>Add Property</Button>
        <h6>Properties</h6>
        <div className="flex flex-col gap-1 overflow-y-scroll scrollbar-thin scrollbar-webkit h-full">
          {data.listings.map((listing) => (
            <Link
              key={listing._id}
              to={`properties/${listing._id}`}
              className="flex items-center gap-2 p-1 pr-3 rounded-lg"
            >
              <div className="w-10 h-10 bg-black rounded-md" />
              <div>
                <p className='font-medium'>{listing.title}</p>
                <p className='text-sm leading-tight text-gray-700'>{listing.address}</p>
              </div>
              <p className="ml-auto">??</p>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

DataNavbar.propTypes = {
  status: PropTypes.string,
  data: PropTypes.object,
  location: PropTypes.string,
};

export default DataNavbar;
