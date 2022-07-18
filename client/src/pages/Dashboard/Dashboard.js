import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './Dashboard.css';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const userId = jwt_decode(localStorage.getItem('token')).data[0];

  useEffect(() => {
    const imageArr = [];
    axios
      .get(`http://localhost:3001/photo-gallery/api/users/${userId}`)
      .then((userData) => {
        userData.data.Posts.map((post) => imageArr.push(post.image.filename));
        setImages(imageArr);
      });
  }, []);

  return (
    <div className="dashboard flex-row ">
      {images.map((image) => (
        <div className="image-tile">
          <img src={`http://localhost:3001/uploads/${image}`} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
