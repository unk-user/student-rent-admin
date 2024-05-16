import PropTypes from 'prop-types';
import BedDoubleIcon from '@/icons/bed-double-stroke-rounded';
import Bathtub01Icon from '@/icons/bathtub-01-stroke-rounded';
import UserIdVerificationIcon from '@/icons/user-id-verification-stroke-rounded';

function PropertyDetails({ listing }) {
  return (
    <div>
      <h5>{listing.title}</h5>
      <div className="text-gray-700">{listing.address}</div>
      <div className="mt-2 ml-1">
        <span className="font-medium text-lg">{listing.price}DH</span>/mo per
        guest
      </div>
      <div className="mt-4 flex gap-6 items-center">
        <div>
          <UserIdVerificationIcon width={26} height={26} />
          <span>4 guests</span>
        </div>
        <div>
          <BedDoubleIcon width={26} height={26} />
          <span>
            {listing.rooms} bedroom{listing.rooms > 1 && 's'}
          </span>
        </div>
        <div>
          <Bathtub01Icon width={26} height={26} />
          <span>
            {listing.bathrooms} bathroom{listing.bathrooms > 1 && 's'}
          </span>
        </div>
      </div>
      <p className="mt-6">{listing.description}</p>
    </div>
  );
}

PropertyDetails.propTypes = {
  listing: PropTypes.object,
};

export default PropertyDetails;
