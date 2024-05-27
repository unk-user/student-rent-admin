import CheckmarkCircle02Icon from '@/icons/checkmark-circle-02-stroke-rounded';
import { MutationContext } from './context/MutationProvider';
import { useContext } from 'react';

function Publish() {
  const { uploadImagesMutation, publishListingMutation } =
    useContext(MutationContext);

  return (
    <div>
      <h3 className="mb-3">Publishing listing, please wait a few moments...</h3>
      <ul className="text-xl">
        <li key="0" className="flex items-center">
          {uploadImagesMutation.status === 'success' ? (
            <CheckmarkCircle02Icon size={24} />
          ) : (
            <span className="loading loading-spinner loading-md"></span>
          )}
          <p>
            {uploadImagesMutation.status === 'success'
              ? 'Images uploaded'
              : 'Uploading images'}
          </p>
        </li>
        <li key="1" className="flex items-center">
          {publishListingMutation.status === 'success' ? (
            <CheckmarkCircle02Icon size={24} />
          ) : (
            <span className="loading loading-spinner loading-md"></span>
          )}
          <p>
            {publishListingMutation.status === 'success'
              ? 'listing created'
              : 'Creating listing'}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Publish;
