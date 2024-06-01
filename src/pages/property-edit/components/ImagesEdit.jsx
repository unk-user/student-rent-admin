import RemoveCircleIcon from '@/icons/remove-circle-stroke-rounded';
import PropTypes from 'prop-types';
import PlusSignIcon from '@/icons/plus-sign-stroke-rounded';

const ImagesLabel = ({ text, onFilesAdded }) => (
  <label
    htmlFor="image-upload"
    className="rounded-xl border-2 border-dashed border-gray-600 flex justify-center items-center aspect-square max-md:w-full max-md:max-h-none max-h-44"
  >
    <input
      id="image-upload"
      onChange={onFilesAdded}
      type="file"
      accept="image/*"
      multiple
      className="hidden"
      maxLength="4"
    />
    <div className="flex flex-col text-center font-medium text-gray-600 opacity-80 items-center">
      <PlusSignIcon className="text-gray-600" />
      {text}
    </div>
  </label>
);

ImagesLabel.propTypes = {
  text: PropTypes.string.isRequired,
  onFilesAdded: PropTypes.func.isRequired,
};

function Image({ src, alt, onRemove }) {
  return (
    <div className="aspect-square relative group max-md:w-full max-md:max-h-none max-h-44">
      <div className="absolute top-1 right-1 cursor-pointer" onClick={onRemove}>
        <RemoveCircleIcon className="opacity-40 group-hover:opacity-100" />
      </div>
      <img
        src={src}
        alt={alt}
        className="object-cover rounded-lg h-full w-full"
      />
    </div>
  );
}

function ImagesEdit({
  images,
  newImages,
  setNewImages,
  removedImages,
  setRemovedImages,
}) {
  const optimisedImages = images.map((image) => {
    const newUrl = image.url
      .split('upload')
      .join('upload/f_auto,q_auto,w_800,h_600');
    return { ...image, url: newUrl };
  });

  const addNewImages = (e) => {
    if (
      e.target.files.length <=
      4 -
        (newImages.length +
          optimisedImages.filter((image) => !removedImages.includes(image.public_id))
            .length)
    ) {
      setNewImages((newImages) => [...newImages, ...e.target.files]);
    }
  };

  const removeImage = (image) => {
    setRemovedImages((removedImages) => [...removedImages, image.public_id]);
  };

  const removeNewImage = (image) => {
    setNewImages((newImages) =>
      newImages.filter((newImage) => newImage !== image)
    );
  };

  return (
    <div className="grid grid-cols-4 max-md:w-full gap-2 w-fit">
      {optimisedImages
        .filter((image) => {
          return !removedImages.includes(image.public_id);
        })
        .map((image) => (
          <Image
            onRemove={() => removeImage(image)}
            src={image.url}
            alt={image.public_id}
            key={image.public_id}
          />
        ))}
      {newImages.map((image, index) => (
        <Image
          onRemove={() => removeNewImage(image)}
          src={URL.createObjectURL(image)}
          alt={'new image'}
          key={index}
        />
      ))}
      {newImages.length +
        optimisedImages.filter(
          (image) => !removedImages.includes(image.public_id)
        ).length <
        4 && (
        <ImagesLabel text="Add Property Image" onFilesAdded={addNewImages} />
      )}
    </div>
  );
}

ImagesEdit.propTypes = {
  images: PropTypes.array,
  newImages: PropTypes.array,
  setNewImages: PropTypes.func,
  removedImages: PropTypes.array,
  setRemovedImages: PropTypes.func,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default ImagesEdit;
