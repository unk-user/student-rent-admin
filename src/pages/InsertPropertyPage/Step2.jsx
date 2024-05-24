import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import NumberInput2 from '@/components/ui/NumberInput2';

function Step2() {
  const { propertyDetails, dispatch } = useContext(FormContext);

  return (
    <>
      <h3 className="mb-3">Describe the accommodations at your rental</h3>
      <div className="grid gap-3">
        <NumberInput2
          label="Rooms"
          value={propertyDetails.rooms}
          minValue={0}
          maxValue={10}
          setValue={(value) => dispatch({ type: 'SET_ROOMS', value })}
        />
        <NumberInput2
          label="Bathrooms"
          value={propertyDetails.bathrooms}
          minValue={0}
          maxValue={10}
          setValue={(value) => dispatch({ type: 'SET_BATHROOMS', value })}
        />
      </div>
    </>
  );
}

export default Step2;
