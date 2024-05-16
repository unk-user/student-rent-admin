import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { RiExpandUpDownLine } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function ComboBox({
  options,
  withSearch = true,
  className,
  name,
  label = '',
  initialValue = '',
  handleChange = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedCity] = useState(initialValue);
  const inputRef = useRef();
  const inputRadio = useRef();
  const comboBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!comboBoxRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelection = (e) => {
    inputRadio.current.value = e.target.textContent;
    setSelectedCity(e.target.textContent);
    handleChange(e.target.textContent);
    setIsOpen(false);
  };

  const filteredData = options.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleButtonClick = (event) => {
    if (event.detail > 2) {
      event.preventDefault(); // Prevent default button behavior
      return;
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div ref={comboBoxRef} className={`relative w-fit h-full`}>
      <Button
        className={`text-ellipsis py-1 h-full w-44 flex justify-between items-center  ${
          className || ''
        }`}
        handleClick={handleButtonClick}
      >
        <div className="flex">
          <input
            type="radio"
            className=" hidden"
            checked={true}
            name={name}
            value={selectedItem}
            readOnly
            ref={inputRadio}
          />
          <p className=" leading-relaxed">{selectedItem || label}</p>
        </div>
        <RiExpandUpDownLine />
      </Button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`${
              className || ''
            } absolute bg-gray-100 w-full mt-[1px] py-1 box-border rounded-md flex flex-col z-30 gap-1 scrollbar-thumb-gray-800`}
          >
            {withSearch && (
              <div className="w-f flex items-center gap-1 px-1 pb-1 border-b-2 border-black">
                <CiSearch className="w-6 h-5" />
                <input
                  ref={inputRef}
                  type="text"
                  maxLength={30}
                  placeholder="Search for more"
                  onChange={handleSearchChange}
                  value={searchQuery}
                  className="w-full focus:outline-none px-1 py-1"
                />
              </div>
            )}
            {filteredData.sort().map((item, index) => {
              return (
                index < 5 && (
                  <div
                    className={
                      'relative hover:bg-gray-200 rounded-md p-1 pl-3 h-8 mx-1'
                    }
                    key={index}
                    value={item}
                    onClick={handleSelection}
                  >
                    {selectedItem === item && (
                      <FaCheck className="absolute w-3 top-1/2 -translate-y-1/2 right-2" />
                    )}
                    <p className="leading-snug">{item}</p>
                  </div>
                )
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

ComboBox.propTypes = {
  options: PropTypes.array,
  withSearch: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ComboBox;
