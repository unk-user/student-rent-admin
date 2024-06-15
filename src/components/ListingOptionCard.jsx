import CheckmarkCircle02Icon from '@/icons/checkmark-circle-02-stroke-rounded';
import { v4 as uuidV4 } from 'uuid';

function ListingOptionCard({ header, title, features }) {
  return (
    <div className="p-4 bg-base-300 rounded-xl">
      <h4 className=" leading-8">{header}</h4>
      <div className="text-xl">{title}</div>
      <ul className='grid gap-2'>
        {features.map((feature) => (
          <li key={uuidV4()} className='flex items-center text-lg gap-1'>
            <CheckmarkCircle02Icon size={16}/>
            <span className='leading-6'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListingOptionCard;
