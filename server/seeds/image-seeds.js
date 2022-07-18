const Image = require('../models/Image');

const imageData = [
  {
    filename: '1.jpg',
    post_id: 1,
  },
  {
    filename: '2.jpg',
    post_id: 2,
  },
  {
    filename: '3.jpg',
    post_id: 3,
  },
  {
    filename: '4.jpg',
    post_id: 4,
  },
  {
    filename: '5.jpg',
    post_id: 5,
  },
  {
    filename: '6.jpg',
    post_id: 6,
  },
  {
    filename: '7.jpg',
    post_id: 7,
  },
  {
    filename: '8.jpg',
    post_id: 8,
  },
  {
    filename: '9.jpg',
    post_id: 9,
  },
  {
    filename: '10.jpg',
    post_id: 10,
  },
  {
    filename: '11.jpg',
    post_id: 11,
  },
  {
    filename: '12.jpg',
    post_id: 12,
  },
  {
    filename: '13.jpg',
    post_id: 13,
  },
  {
    filename: '14.jpg',
    post_id: 14,
  },
  {
    filename: '15.jpg',
    post_id: 15,
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
