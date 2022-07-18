import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav flex-row justify-between align-center">
      <div className="nav-container-left nav-container"></div>
      <div className="nav-center-left nav-container"></div>
      <div className="nav-container-right nav-container"></div>
    </div>
  );
};

export default Nav;
