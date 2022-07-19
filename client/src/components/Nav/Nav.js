import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ links }) => {
  return (
    <div className="nav flex-row justify-between align-center">
      <div className="nav-container-left nav-container">
        <img src="https://www.svgrepo.com/show/82627/xing-logo.svg" />
      </div>
      <div className="nav-center-container nav-container flex-row justify-between align-center">
        {links.map((link) => (
          <div className="link-container">
            <Link to={link}>
              {link[1].toUpperCase() + link.split('').slice(2).join('')}
            </Link>
          </div>
        ))}
      </div>
      <div className="nav-container-right nav-container">
        {/* Profile pic goes here */}
      </div>
    </div>
  );
};

export default Nav;
