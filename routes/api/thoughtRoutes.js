const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// GET thoughts for POST
router.route('/').get(getThoughts).post(createThought);


// GET thoughts by id for updating and deleting
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// GET reactions
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE for Reactions
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
