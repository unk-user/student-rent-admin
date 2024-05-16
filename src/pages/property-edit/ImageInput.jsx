import Cancel01Icon from '../../icons/cancel-01-stroke-rounded';
import PlusSignIcon from '../../icons/plus-sign-stroke-rounded';
import PropTypes from 'prop-types';

function ImageInput({ selectedFiles, setSelectedFiles, status }) {
  const handleFileChange = (e) => {
    setSelectedFiles(
      selectedFiles.concat(
        Array.from(e.target.files).slice(0, 4 - selectedFiles.length)
      )
    );
  };

  return (
    <div
      className={`gap-4 grid grid-cols-3 ${
        status === 'loading' && 'opacity-60 disabled'
      }`}
    >
      {selectedFiles &&
        selectedFiles.map((file, index) => (
          <div
            key={index}
            className={`group relative ${
              index === 0 ? 'col-span-3 h-96' : 'h-36'
            }`}
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`Selected Image ${index + 1}`}
              className="rounded-xl object-cover w-full h-full"
            />
            <Cancel01Icon
              onClick={() =>
                setSelectedFiles(() =>
                  selectedFiles.filter((_, i) => i !== index)
                )
              }
              className="absolute hidden group-hover:block top-1 right-1"
            />
          </div>
        ))}
      {selectedFiles.length < 4 && (
        <label
          htmlFor="image-upload"
          className={`rounded-xl border-4 border-dashed flex justify-center items-center ${
            selectedFiles.length === 0 ? 'h-96 col-span-3' : 'h-36'
          }`}
        >
          <input
            id="image-upload"
            disabled={status === 'loading' || status === 'success'}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            maxLength="4"
            onChange={handleFileChange}
          />
          <div className="flex flex-col text-center font-medium text-gray-300 opacity-80 items-center">
            <PlusSignIcon className="text-gray-300" />
            Add Property
            <br /> Image
          </div>
        </label>
      )}
    </div>
  );
}

ImageInput.propTypes = {
  selectedFiles: PropTypes.array,
  setSelectedFiles: PropTypes.func,
  status: PropTypes.string,
};

export default ImageInput;
