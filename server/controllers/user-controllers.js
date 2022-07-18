const { User, Post, Comment, Image } = require('../models/');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const userController = {
  getAllUsers(req, res) {
    User.findAll({})
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },

  getUserById(req, res) {
    User.findOne({
      where: {
        id: req.params.userId,
      },

      include: [
        {
          model: Post,
          include: [
            {
              model: Comment,
            },
            {
              model: Image,
            },
          ],
        },
      ],
    })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Register
  register(req, res) {
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((userData) => {
        console.log(userData);
        const token = jwt.sign(
          {
            data: [userData.id, userData.email],
          },
          secret,
          { expiresIn: '2h' }
        );
        res.json({ user: userData, token: token });
      })
      .catch((err) => res.json(err));
  },

  // login
  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userData) => {
        const token = jwt.sign(
          { data: [userData.id, userData.email] },
          secret,
          {
            expiresIn: '2h',
          }
        );
        res.json({ user: userData, token: token });
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Update User
  updateUser(req, res) {
    User.update(
      { firstName: req.body.firstName },
      { lastName: req.body.lastName },
      { password: req.body.password },
      { email: req.body.email },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((userData) => {
        res.json({ data: userData, message: 'User successfully updated.' });
      })
      .catch((err) => {
        res.json({ error: err, message: err.message });
      });
  },

  // Delete User
  deleteUser(req, res) {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((response) => {
        res.json({ data: response, message: 'User successfully deleted' });
      })
      .catch((err) => {
        res.json({ data: err, message: err.message });
      });
  },
};

module.exports = userController;
