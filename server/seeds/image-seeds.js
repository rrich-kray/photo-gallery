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
  {
    filename: '16.jpg',
    post_id: 16,
  },
  {
    filename: '17.jpg',
    post_id: 17,
  },
  {
    filename: '18.jpg',
    post_id: 18,
  },
  {
    filename: '19.jpg',
    post_id: 19,
  },
  {
    filename: '20.jpg',
    post_id: 20,
  },
  {
    filename: '21.jpg',
    post_id: 21,
  },
  {
    filename: '22.jpg',
    post_id: 22,
  },
  {
    filename: '23.jpg',
    post_id: 23,
  },
  {
    filename: '24.jpg',
    post_id: 24,
  },
  {
    filename: '25.jpg',
    post_id: 25,
  },
  {
    filename: '26.jpg',
    post_id: 26,
  },
  {
    filename: '27.jpg',
    post_id: 27,
  },
  {
    filename: '28.jpg',
    post_id: 28,
  },
  {
    filename: '29.jpg',
    post_id: 29,
  },
  {
    filename: '30.jpg',
    post_id: 30,
  },
  {
    filename: '31.jpg',
    post_id: 31,
  },
  {
    filename: '32.jpg',
    post_id: 32,
  },
  {
    filename: '33.jpg',
    post_id: 33,
  },
  {
    filename: '34.jpg',
    post_id: 34,
  },
  {
    filename: '35.jpg',
    post_id: 35,
  },
  {
    filename: '36.jpg',
    post_id: 36,
  },
  {
    filename: '37.jpg',
    post_id: 37,
  },
  {
    filename: '38.jpg',
    post_id: 38,
  },
  {
    filename: '39.jpg',
    post_id: 39,
  },
  {
    filename: '40.jpg',
    post_id: 40,
  },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;
