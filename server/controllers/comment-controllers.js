const { Comment } = require('../models/Comment');

const commentController = {
  getCommentsByUser(req, res) {
    Comment.findAll({
      where: {
        user_id: req.body.user_id,
      },
    })
      .then((commentData) => {
        res.json(commentData);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = commentController;
