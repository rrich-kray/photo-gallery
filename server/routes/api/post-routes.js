const { Post } = require('../../models/Post');
const router = require('express').Router();
const {
  getAllPosts,
  getPostsById,
  createPost,
  searchPostsByTitle,
  searchPostsByContent,
  searchPostsByTitleOrContent,
  deletePost,
  updatePost,
  uploadFile,
} = require('../../controllers/post-controllers');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:title').get(searchPostsByTitle);
router.route('/:content').get(searchPostsByContent);
router.route('/:titleOrContent').get(searchPostsByTitleOrContent);
router.route('/upload').post(uploadFile);
router.route('/:postId').get(getPostsById).put(updatePost).delete(deletePost);

module.exports = router;
