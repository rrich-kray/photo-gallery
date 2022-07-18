import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const handleFormSubmit = (e) => {
    axios
      .post('http://localhost:3001/photo-gallery/api/users/login', {
        email: formState.email,
        password: formState.password,
      })
      .then((userData) => {
        console.log(userData);
        login(userData.data);
        window.location.replace('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="register flex-row">
      <div className="overlay"></div>
      <div className="register-left-panel flex-col justify-center align-center">
        <div className="register-text-container flex-col justify-center align-start">
          <span>Login to an existing account</span>
          <h1>Welcome back!</h1>
          <span>
            Not a member yet? <Link to="/register">Register</Link>
          </span>
        </div>
        <form className="register-form form">
          <div className="register-email-container input-container">
            <span>Email:</span>
            <input name="email" id="email" onChange={handleChange} />
          </div>
          <div className="register-password-container input-container">
            <span>Password:</span>
            <input name="password" id="password" onChange={handleChange} />
          </div>
        </form>
        <div className="register-btns-container" style={{ zIndex: '999' }}>
          <button
            className="register-submit-btn form-btn"
            onClick={() => handleFormSubmit()}
          >
            Log in
          </button>
          {/* <button className="form-btn">Login</button> */}
        </div>
      </div>
      <div className="register-right-panel"></div>
    </div>
  );
};

export default Login;
