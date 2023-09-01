const router = require('express').Router();
const {
    getAllUsers,
    getOneUsers,
    createOneUser,
    updateOneUser,
    deleteOneUser,
    addNewFriend,
    removeOneFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createOneUser);

// /api/users/:userId
router.route('/:userId').get(getOneUsers).put(updateOneUser).delete(deleteOneUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeOneFriend);

module.exports = router;
