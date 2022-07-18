const Comment = require('../models/Comment.js');

const commentData = [
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 1,
    post_id: 1,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 2,
    post_id: 2,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 3,
    post_id: 3,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 4,
    post_id: 4,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 5,
    post_id: 5,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 6,
    post_id: 6,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 7,
    post_id: 7,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 8,
    post_id: 8,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 9,
    post_id: 9,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 10,
    post_id: 10,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 1,
    post_id: 2,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 2,
    post_id: 12,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 3,
    post_id: 4,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 4,
    post_id: 14,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 5,
    post_id: 1,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 6,
    post_id: 1,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 7,
    post_id: 2,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 8,
    post_id: 5,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 9,
    post_id: 4,
  },
  {
    title: 'Dolore irure occaecat nostrud excepteur ut veniam quis cupidatat.',
    content: `Velit pariatur ullamco officia exercitation sunt fugiat veniam aliquip nostrud tempor sunt elit mollit ex.`,
    user_id: 10,
    post_id: 9,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
