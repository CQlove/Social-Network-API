const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
    deleteOneUser,
    addNewFriend,
    removeOneFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createOneUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateOneUser).delete(deleteOneUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeOneFriend);

module.exports = router;
