const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find()
                // -1 is descending order, and shows by newest to oldest
                .sort({ createdAt: -1 });
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // get one thought by find thoughtId
    async getOneThought(req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create a new thought
    async createOneThought(req, res) {
        try {
            // create a new thought by sending the request body
            const thoughtData = await Thought.create(req.body);
            // find user by checking user id and sending this thought under this user id 
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                // using $push operator to add this thought id into thoughts
                { $push: { thoughts: thoughtData._id } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'Can not found this id to ceate a new thought' });
            }
            res.json({ message: 'A New Thought created!', thought: thoughtData });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update one thought
    async updateOneThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove a thought
    async deleteThought(req, res) {
        try {
            // find a thought id first
            const thoughtData = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            // using $pull operator remove a thought by finding thoughtId
            const userData = User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );

            if (!userData) {
                return res.status(404).json({ message: 'Thought created but no user with this id!' });
            }

            res.json({ message: 'Your thought deleted!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // add a reaction to a thought
    async addOneReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove one reaction from a thought
    async removeOneReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}
