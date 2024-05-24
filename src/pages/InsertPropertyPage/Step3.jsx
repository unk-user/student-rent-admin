import PriceInput from '@/components/ui/PriceInput';
import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import RadioBox from '@/components/ui/RadioBox';
import CheckmarkCircle02Icon from '@/icons/checkmark-circle-02-stroke-rounded';
import CircleIcon from '@/icons/circle-stroke-rounded';

function Step3() {
  const { propertyDetails, dispatch } = useContext(FormContext);

  const handleChange = (value) => {
    dispatch({ type: 'SET_PERIOD', value });
  };

  return (
    <>
      <h3 className="mb-3">Set your price rate and rental preferences</h3>
      <div className="text-xl mb-2">Rental period</div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <RadioBox
          label="monthly"
          selectedValue={propertyDetails.period}
          icon={
            propertyDetails.period === 'monthly' ? (
              <CheckmarkCircle02Icon />
            ) : (
              <CircleIcon />
            )
          }
          handleChange={() => handleChange('monthly')}
        />
        <RadioBox
          label="yearly"
          selectedValue={propertyDetails.period}
          icon={
            propertyDetails.period === 'yearly' ? (
              <CheckmarkCircle02Icon />
            ) : (
              <CircleIcon />
            )
          }
          handleChange={() => handleChange('yearly')}
        />
      </div>
      <PriceInput
        value={propertyDetails.price}
        setValue={(value) => dispatch({ type: 'SET_PRICE', value })}
      />
    </>
  );
}

export default Step3;
