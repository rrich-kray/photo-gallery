const { Post } = require('../../models/Post');
const router = require('express').Router();
const {
  getAllPosts,
  getPostsById,
  searchPostsByTitle,
  searchPostsByContent,
  searchPostsByTitleOrContent,
  deletePost,
  updatePost,
} = require('../../controllers/post-controllers');

router.route('/').get(getAllPosts);
router.route('/:postId').get(getPostsById).put(updatePost).delete(deletePost);

module.exports = router;
