import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';

function FillProgress({ total, filled }) {
  const array = Array.from({ length: total });

  return (
    <div className="flex items-center h-6 gap-[3px] w-full">
      {array.map((_, index) => (
        <div key={uuidV4()} className={`h-[12px] w-8 bg-base-100 rounded-md ${index < filled && 'bg-green-500'}`} />
      ))}
      <div className='ml-auto'>{filled} / {total}</div> 
    </div>
  );
}

FillProgress.propTypes = {
  total: PropTypes.number,
  filled: PropTypes.number,
};

export default FillProgress;
