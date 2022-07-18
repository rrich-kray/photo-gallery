const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  register,
} = require('../../controllers/user-controllers');

router.route('/').get(getAllUsers);
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
