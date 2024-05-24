import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import Select from '@/components/ui/Select';

const citiesArray = [
  'Agadir',
  'Al Hoceima',
  'Azrou',
  'Beni Mellal',
  'Boujdour',
  'Casablanca',
  'Chefchaouen',
  'Dakhla',
  'El Jadida',
  'Errachidia',
  'Essaouira',
  'Fes',
  'Guelmim',
  'Ifrane',
  'Kenitra',
  'Khenifra',
  'Khouribga',
  'Laayoune',
  'Larache',
  'Marrakech',
  'Meknes',
  'Mohammedia',
  'Nador',
  'Ouarzazate',
  'Oujda',
  'Rabat',
  'Safi',
  'Sale',
  'Sefrou',
  'Settat',
  'Sidi Kacem',
  'Tangier',
  'Tan-Tan',
  'Taza',
  'Tetouan',
  'Tiznit',
];

function Step4() {
  const { propertyDetails, dispatch } = useContext(FormContext);

  return (
    <>
      <h3 className="mb-3 max-md:pr-12">Where&apos;s your place located?</h3>
      <Select
        options={citiesArray}
        selected={propertyDetails.city}
        onChange={(e) => dispatch({ type: 'SET_CITY', value: e.target.value })}
        label="City"
        inputClass="bg-transparent"
        className="text-xl w-full"
        heightClass="h-12"
        name="price-select"
        placeholder="Select your city"
      />
      <div className="flex flex-col text-xl mt-3">
        <label htmlFor="address-input" className={`mb-1 relative `}>
          Address
        </label>
        <input
          type="text"
          name="address-input"
          value={propertyDetails.address}
          onChange={(e) =>
            dispatch({ type: 'SET_ADDRESS', value: e.target.value })
          }
          id="address-input"
          className="input input-bordered text-xl rounded-md py-2 pl-4 px-2 h-12  bg-transparent"
          minLength="0"
          maxLength="100"
          required={true}
        />
      </div>
    </>
  );
}

export default Step4;
