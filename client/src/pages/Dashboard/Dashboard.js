import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Tile from '../../components/Tile/Tile';
import jwt_decode from 'jwt-decode';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const userId = jwt_decode(localStorage.getItem('token')).data[0];

  useEffect(() => {
    const postsArr = [];
    axios
      .get(`http://localhost:3001/photo-gallery/api/users/${userId}`)
      .then((userData) => {
        userData.data.Posts.map((post) => postsArr.push(post));
        setPosts(postsArr);
      });
  }, []);

  return (
    <div className="dashboard flex-col">
      <Nav links={['/dashboard', '/profile', '/logout']} />
      <div className="photo-container">
        {posts.map((post) => (
          <Tile post={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
