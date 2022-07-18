import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formState, setFormState] = useState({
    firtName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    return {
      ...formState,
      [name]: value,
    };
  };

  return (
    <div className="register flex-row">
      <div className="overlay"></div>
      <div className="register-left-panel flex-col justify-center align-center">
        <div className="register-text-container flex-col justify-center align-start">
          <span>Start for free</span>
          <h1>Create a new account</h1>
          <span>
            Already a member? <Link to="login">Log in</Link>
          </span>
        </div>
        <form className="register-form form">
          <div className="register-names-container flex-row justify-center align-center">
            <div className="register-first-name input-container">
              <span>First Name:</span>
              <input name="firstName" id="firstName" onChange={handleChange} />
            </div>
            <div className="register-last-name input-container">
              <span>Last Name:</span>
              <input name="lastName" id="lastName" onChange={handleChange} />
            </div>
          </div>
          <div className="register-email-container input-container">
            <span>Email:</span>
            <input name="lastName" id="lastName" onChange={handleChange} />
          </div>
          <div className="register-password-container input-container">
            <span>Password:</span>
            <input name="passsword" id="password" onChange={handleChange} />
          </div>
          <div className="register-btns-container">
            <button className="register-submit-btn form-btn">Register</button>
            <button className="form-btn">Login</button>
          </div>
        </form>
      </div>
      <div className="register-right-panel"></div>
    </div>
  );
};

export default Register;
