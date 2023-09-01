const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createOneThought,
    updateOneThought,
    deleteThought,
    addOneReaction,
    removeOneReaction,
} = require('../../controllers/thought-controller');


// /api/thoughts routes
router.route('/').get(getThoughts).post(createOneThought);

// /api/thoughts/:thoughtId routes
router.route('/:thoughtId').get(getOneThought).put(updateOneThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(addOneReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeOneReaction);

module.exports = router;
