import Proptypes from 'prop-types';

function SettingSectionBody({ children }) {
  return <div className="lg:w-[640px] w-full">{children} </div>;
}

SettingSectionBody.propTypes = {
  children: Proptypes.node,
};

export default SettingSectionBody;
