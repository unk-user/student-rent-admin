import axiosInstance from '@/utils/axiosInstance';
import { PropTypes } from 'prop-types';

function DeleteListingModal({ refetch, auth }) {
  async function handleRemove() {
    const modalElement = document.getElementById('remove_listing_modal');
    const listingId = modalElement.getAttribute('data-listing-id');
    await axiosInstance.delete(`/landlord/listings/${listingId}`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    modalElement.close();
    refetch();
  }

  return (
    <dialog
      id="remove_listing_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete Listing</h3>
        <p className="py-4">
          Are you sure you want to delete this listing? This action is
          permanent and cannot be undone.
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Cancel</button>
          </form>
          <button className='btn btn-error' onClick={handleRemove}>Delete</button>
        </div>
      </div>
    </dialog>
  );
}

DeleteListingModal.propTypes = {
  refetch: PropTypes.func,
  auth: PropTypes.any,
};

export default DeleteListingModal;
