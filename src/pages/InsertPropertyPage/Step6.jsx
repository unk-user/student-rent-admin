import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import Textarea from '@/components/ui/Textarea';

function Step6() {
  const { propertyDetails, dispatch } = useContext(FormContext);

  return (
    <div>
      <h3 className="mb-3">Finish up with a title and description</h3>
      <div className="flex flex-col text-xl mb-2">
        <label htmlFor="title-input" className={`mb-1 relative `}>
          Title
        </label>
        <input
          type="text"
          autoComplete='off'
          placeholder="Title of your property"
          name="title-input"
          value={propertyDetails.title}
          onChange={(e) => {
            if (e.target.value !== propertyDetails.title)
              dispatch({ type: 'SET_TITLE', value: e.target.value });
          }}
          id="title-input"
          className="input input-bordered text-xl rounded-md py-2 pl-4 px-2 h-12  bg-transparent"
          minLength="0"
          maxLength="100"
          required={true}
        />
      </div>
      <Textarea
        label="Description"
        placeholder="Description of your property"
        value={propertyDetails.description}
        onChange={(e) =>
          dispatch({ type: 'SET_DESCRIPTION', value: e.target.value })
        }
        maxLength='300'
      />
    </div>
  );
}

export default Step6;
