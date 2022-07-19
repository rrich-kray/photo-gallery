const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const imageRoutes = require('./image-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/images', imageRoutes);

module.exports = router;
