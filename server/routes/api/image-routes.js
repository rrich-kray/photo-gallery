const router = require('express').Router();
const { Image } = require('../../models/Image');
const { createImage } = require('../../controllers/image-controllers');

router.route('/').post(createImage);

module.exports = router;
