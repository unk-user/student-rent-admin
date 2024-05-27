import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function PriceInput({ value, setValue }) {
  const inputRef = useRef(null)
  useEffect(() => {

  }, [])

  return (
    <div className="flex items-center text-xl border-2 h-16 rounded-xl px-2 w-full">
      <div>Price</div>
      <div className="ml-auto text-2xl p-2 font-medium">
        <span>MAD</span>
        <span className="relative">
          {value}
          <input
            type="text"
            inputMode="numeric"
            onChange={(e) => {
              if (e.target.value <= 1000000 && e.target.value >= 0 && e.target.value !== ' ')
                setValue(e.target.value);
            }}
            value={value}
            ref={inputRef}
            autoComplete="off"
            className="absolute left-0 bg-transparent outline-none border-0 w-full"
          />
        </span>
      </div>
    </div>
  );
}

PriceInput.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
};

export default PriceInput;
