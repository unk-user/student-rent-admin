import CategorySelect from '@/components/ui/CategorySelect';
import { useContext } from 'react';
import { FormContext } from './context/FormProvider';

// const citiesArray = [
//   'Agadir',
//   'Al Hoceima',
//   'Azrou',
//   'Beni Mellal',
//   'Boujdour',
//   'Casablanca',
//   'Chefchaouen',
//   'Dakhla',
//   'El Jadida',
//   'Errachidia',
//   'Essaouira',
//   'Fes',
//   'Guelmim',
//   'Ifrane',
//   'Kenitra',
//   'Khenifra',
//   'Khouribga',
//   'Laayoune',
//   'Larache',
//   'Marrakech',
//   'Meknes',
//   'Mohammedia',
//   'Nador',
//   'Ouarzazate',
//   'Oujda',
//   'Rabat',
//   'Safi',
//   'Sale',
//   'Sefrou',
//   'Settat',
//   'Sidi Kacem',
//   'Tangier',
//   'Tan-Tan',
//   'Taza',
//   'Tetouan',
//   'Tiznit',
// ];

function Step1() {
  const { propertyDetails, dispatch } = useContext(FormContext);

  return (
    <>
      <h3 className="mb-3">What type of accommodation are you offering?</h3>
      <CategorySelect
        value={propertyDetails.category}
        handleChange={(value) => dispatch({ type: 'SET_CATEGORY', value })}
      />
    </>
  );
}

export default Step1;
