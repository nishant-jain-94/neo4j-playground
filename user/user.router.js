const router = require('express').Router();
const UserController = require('./user.controller');

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await UserController.getUser(userId);
  res.json(user);
});

router.get('/:userId/friends', async (req, res) => {
  const { userId } = req.params;
  const usersFriend = await UserController.getUsersFriends(userId);
  res.json(usersFriend);
});

router.get('/:user1/:user2/mutual', async (req, res) => {
  const { user1, user2 } = req.params;
  const mutuals = await UserController.getMutualFriends(user1, user2);
  res.json(mutuals);
});

module.exports = router;
