const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// GET Users
router.route('/').get(getUsers).post(createUser);

// / PUT for updating user(s)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// DEL & PUT 
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
