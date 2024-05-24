import { useContext } from 'react';
import { FormContext } from './context/FormProvider';
import ListingCard from './ListingCard';
import ListingOptionCard from '@/components/ListingOptionCard';

const basicFeatures = [
  'Your listing will be visible to all users',
  'No additional fees or charges',
  'Standard visibility and ranking',
];

const premiumFeatures = [
  'Higher priority in search results',
  'Increased visibility and exposure',
  'Featured listing badge',
];

function Publish() {
  const { propertyDetails, selectedFiles } = useContext(FormContext);

  return (
    <div>
      <h3 className="mb-3">Publish your listing</h3>
      <div className="flex gap-4 max-md:gap-2 max-sm:flex-col">
        <div className="w-[220px] lg:w-[240px] max-sm:w-full">
          {selectedFiles[0] && (
            <ListingCard
              listing={propertyDetails}
              imageUrl={URL.createObjectURL(selectedFiles[0])}
            />
          )}
        </div>
        <div className="grid grid-rows-2 flex-1 gap-2">
          <ListingOptionCard
            header="Publish without ads"
            title="basic listing"
            features={basicFeatures}
          />
          <ListingOptionCard
            header="Boosted"
            title="premium Listing"
            features={premiumFeatures}
          />
        </div>
      </div>
    </div>
  );
}

export default Publish;
