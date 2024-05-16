import { AnimatePresence, backInOut, motion } from 'framer-motion';
import PropTypes from 'prop-types';

function ErrorPopup({ message }) {
  return (
    <AnimatePresence mode="wait">
      {message && (
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ ease: backInOut }}
          className="absolute -top-12 rounded-md bg-slate-600 w-full text-center p-2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ErrorPopup.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string,
};

export default ErrorPopup;
