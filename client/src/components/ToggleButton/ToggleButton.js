import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ toggleNav }) => {
  return <div className="toggle-btn" onClick={() => toggleNav()}></div>;
};

export default ToggleButton;
