import { Input, Slider } from '@mui/material';
import PropTypes from 'prop-types';

function PriceInput2({ value, onchange }) {
  return (
    <div className="flex items-center gap-2">
      <input type='number' className='input input-bordered rounded-lg h-14'/>
      <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={onchange}
        aria-label="price-slider"
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        step={50}
        color='black'
      />
    </div>
  );
}

PriceInput2.propTypes = {
  value: PropTypes.number,
  onchange: PropTypes.func,
};

export default PriceInput2;
