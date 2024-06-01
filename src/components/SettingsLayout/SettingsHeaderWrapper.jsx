import PropTypes from 'prop-types';
import { Tabs } from '@mui/material';
import { useState } from 'react';

function SettingsHeaderWrapper({ children, icon, header }) {

  return (
    <section className="flex flex-col max-sm:px-4 border-b border-gray-400">
      <div className="flex items-center mt-4">
        <div className="rounded-full bg-gray-400 flex items-center justify-center p-[2px] mr-2">
          {icon}
        </div>
        <h4>{header}</h4>
      </div>
      <div className="flex items-center gap-6 text-gray-800">{children}</div>
    </section>
  );
}

SettingsHeaderWrapper.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  header: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SettingsHeaderWrapper;
