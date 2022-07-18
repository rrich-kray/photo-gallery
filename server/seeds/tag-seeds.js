const Tag = require('../models/Tag');

const tagData = [
  {
    name: 'Gaming',
    post_id: 1,
  },
  {
    name: 'Tech',
    post_id: 2,
  },
  {
    name: 'Nature',
    post_id: 3,
  },
  {
    name: 'Urban',
    post_id: 4,
  },
  {
    name: 'Animals',
    post_id: 5,
  },
  {
    name: 'Funny',
    post_id: 6,
  },
  {
    name: 'Food',
    post_id: 7,
  },
  {
    name: 'Furniture',
    post_id: 8,
  },
  {
    name: 'Outdoors',
    post_id: 9,
  },
  {
    name: 'Culture',
    post_id: 10,
  },
  {
    name: 'Decor',
    post_id: 11,
  },
  {
    name: 'Homes',
    post_id: 12,
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
