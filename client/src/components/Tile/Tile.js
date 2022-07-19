import React from 'react';
import './Tile.css';

const Tile = ({ post }) => {
  return (
    <div
      className="image-tile "
      style={{
        backgroundImage: `url(http://localhost:3001/uploads/${post.image.filename})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        width: '500px',
      }}
    >
      <div className="tile-content-container flex-col justify-center align-center">
        <h1>{post.title}</h1>
        <p>
          {post.content.split(' ').length > 10
            ? `${post.content.split(' ').slice(0, 10).join(' ')}...`
            : post.content}
        </p>
      </div>
    </div>
  );
};

export default Tile;
