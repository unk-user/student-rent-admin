import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import PlusSignIcon from '@/icons/plus-sign-stroke-rounded';
import Cancel01Icon from '@/icons/cancel-01-stroke-rounded';
import { v4 as uuidV4 } from 'uuid';

function Step5() {
  const { selectedFiles, setSelectedFiles } = useContext(FormContext);

  const isImageFile = (file) => file.type.startsWith('image/');

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
      .filter(isImageFile)
      .slice(0, 4 - selectedFiles.length);

    if (newFiles.length === 0) {
      alert('Please select image files only.');
      return;
    }

    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  return (
    <div className="w-full">
      <h3 className="mb-3 w-fit">Upload photos to showcase your rental</h3>
      <div className="rounded-2xl p-4 bg-base-200 max-w-[760px]">
        <label
          htmlFor="image-upload"
          className={`rounded-xl border-2 border-dashed mb-2 border-gray-600 flex justify-center items-center h-32 ${
            selectedFiles.length === 4 && 'opacity-50'
          }`}
        >
          <input
            id="image-upload"
            disabled={selectedFiles.length === 4}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            maxLength="4"
            onChange={handleFileChange}
          />
          <div className="flex flex-col text-center font-medium text-gray-600 opacity-80 items-center">
            <PlusSignIcon className="text-gray-600" />
            Add Property
            <br /> Image
          </div>
        </label>
        <div className="grid grid-cols-4 gap-2 p-2 w-full">
          {selectedFiles &&
            selectedFiles.map((file, index) => (
              <div key={uuidV4()} className="group relative aspect-square">
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
                  className="absolute opacity-40 group-hover:opacity-100 top-1 right-1"
                />
              </div>
            ))}
          {Array.from({ length: 4 - selectedFiles.length }).map(() => (
            <div
              key={uuidV4()}
              className="aspect-square bg-gray-300 rounded-md"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Step5;
