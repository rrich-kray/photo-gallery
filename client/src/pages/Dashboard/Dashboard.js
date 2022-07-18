import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './Dashboard.css';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const userId = jwt_decode(localStorage.getItem('token')).data[0];
  useEffect(() => {
    axios
      .get(`http://localhost:3001/photo-gallery/api/users/1`)
      .then((imageData) => {
        console.log(imageData);
      });
  }, []);
  return <div className="dashboard flex-row "></div>;
};

export default Dashboard;
