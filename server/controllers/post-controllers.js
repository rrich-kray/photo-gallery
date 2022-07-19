const { Post, Image, Comment } = require('../models');
const { Op } = require('sequelize');
const uniqid = require('uniqid');
const path = require('path');
// response is going through to the server but the server is returning an empty dataset

const postController = {
  // Query all posts
  getAllPosts(req, res) {
    Post.findAll({
      include: [
        {
          model: Comment,
        },
        {
          model: Image,
        },
      ],
    })
      .then((postData) => {
        console.log(postData);
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Query a single post by ID
  getPostsById(req, res) {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
        },
      ],
    })
      .then((postData) => {
        if (!postData) {
          res.json('No posts found with this ID!');
          return;
        }
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //Create post
  createPost(req, res) {
    Post.create(req.body)
      .then((postData) => {
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Search posts by title
  searchPostsByTitle(req, res) {
    Post.findAll({
      where: {
        title: {
          [Op.like]: req.body.search,
        },
      },
    })
      .then((postData) => {
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Search post by content
  searchPostsByContent(req, res) {
    Post.findAll({
      where: {
        content: {
          [Op.like]: req.params.search,
        },
      },
    });
  },

  // Search posts by title or content
  searchPostsByTitleOrContent(req, res) {
    Post.findAll({
      where: {
        [Op.or]: {
          title: {
            [Op.like]: req.body.search,
          },
          content: {
            [Op.like]: req.body.search,
          },
        },
      },
    })
      .then((postData) => {
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // delete post
  deletePost(req, res) {
    Post.destroyk({
      where: {
        id: req.params.id,
      },
    })
      .then((response) => {
        res.json({ response: response, message: 'Post successfully deleted' });
      })
      .catch((err) => {
        res.json({ error: err, message: 'Could not delete post' });
      });
  },

  // Update post
  updatePost(req, res) {
    Post.update(
      { title: req.body.title },
      { content: req.body.content },
      { where: { id: req.params.id } }
    )
      .then((postData) => {
        res.json(postData);
      })
      .catch((err) => {
        res.json(err);
      });

    Image.update(
      { filename: req.body.filename },
      { where: { post_id: req.params.id } }
    )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Upload files
  // Check if image files are attached. If not, send message in response object
  // Otherwise, assign file to variable, and generate a unique file name with uniqid
  // Move file to uploads folder using .mv()
  // Create entry in Image model with unique filename and user id.
  uploadFile(req, res) {
    if (!req.files) {
      res.send({
        status: 'failed',
        message: 'No file uploaded',
      });
      return;
    }
    const file = req.files.file;
    const originalFilenameArr = file.name.split('.');
    const extension = originalFilenameArr[originalFilenameArr.length - 1];
    const filename = uniqid();
    const filenameExt = filename + '.' + extension;
    // if it's located on body object it's likely the .mv() method is not available on the object
    file.mv(path.join(__dirname, '../uploads', filenameExt));
    res.send(filenameExt);
  },
};

module.exports = postController;
