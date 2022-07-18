const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedTags = require('./tag-seeds');
const seedUpvotes = require('./upvote-seeds');
const seedDownvotes = require('./downvote-seeds');
const seedImages = require('./image-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(`----------DATABASE SYNCED----------`);
  await seedUsers();
  console.log(`----------USERS SYNCED----------`);
  await seedPosts();
  console.log(`----------POSTS SYNCED----------`);
  await seedTags();
  console.log(`----------TAGS SYNCED----------`);
  await seedComments();
  console.log(`----------COMMENTS SYNCED----------`);
  await seedUpvotes();
  console.log(`----------UPVOTES SYNCED----------`);
  await seedDownvotes();
  console.log(`----------DOWNVOTES SYNCED----------`);
  await seedImages();
  console.log(`----------IMAGES SYNCED----------`);
  process.exit(0);
};

seedAll();
