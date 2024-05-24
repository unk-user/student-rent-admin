import { createContext, useEffect, useReducer, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const FormContext = createContext();

const validateSteps = (propertyDetails, selectedFiles) => {
  const stepsValidity = {
    step1: propertyDetails.category !== null,
    step2: propertyDetails.rooms !== null && propertyDetails.bathrooms !== null,
    step3: propertyDetails.price && propertyDetails.period,
    step4: propertyDetails.city && propertyDetails.address,
    step5: selectedFiles.length >= 1,
    step6: propertyDetails.title && propertyDetails.description.length,
  };

  return stepsValidity;
};

function FormProvider({ children }) {
  const navigate = useNavigate();
  const [propertyDetails, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_TITLE':
          return {
            ...state,
            title: action.value,
          };
        case 'SET_DESCRIPTION':
          return {
            ...state,
            description: action.value,
          };
        case 'SET_ADDRESS':
          return {
            ...state,
            address: action.value,
          };
        case 'SET_CITY':
          return {
            ...state,
            city: action.value,
          };
        case 'SET_PRICE':
          return {
            ...state,
            price: Number(action.value),
          };
        case 'SET_PERIOD':
          return {
            ...state,
            period: action.value,
          };
        case 'SET_ROOMS':
          return {
            ...state,
            rooms: action.value,
          };
        case 'SET_BATHROOMS':
          return {
            ...state,
            bathrooms: action.value,
          };
        case 'SET_CATEGORY':
          return {
            ...state,
            category: action.value,
          };
      }
    },
    {
      title: '',
      description: '',
      address: '',
      city: '',
      price: 600,
      period: '',
      rooms: 1,
      bathrooms: 1,
      category: null,
    }
  );
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [stepsValidity, setStepsValidity] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
  });

  useEffect(() => {
    const updatedStepsValidity = validateSteps(propertyDetails, selectedFiles);
    setStepsValidity(updatedStepsValidity);

    if (!updatedStepsValidity.step1) navigate('./step1', { replace: true });
  }, [propertyDetails, selectedFiles]);

  return (
    <FormContext.Provider
      value={{
        propertyDetails,
        dispatch,
        selectedFiles,
        setSelectedFiles,
        stepsValidity,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.any,
};

export default FormProvider;
