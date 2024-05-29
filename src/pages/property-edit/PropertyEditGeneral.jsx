import useQueryAuth from '@/hooks/useQueryAuth';
import { useParams } from 'react-router-dom';

function PropertyEditGeneral() {
  const listingId = useParams().listingId;
  const { data, status } = useQueryAuth({
    queryKey: ['property', listingId],
    url: '/landlord/listings/' + listingId,
  });
  const listing = data.rentalListing;

  
  return (<section className="py-4"> listingId: {listingId}</section>);
}

export default PropertyEditGeneral;
