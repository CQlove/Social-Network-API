const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const userData = await User.find()
                // do not select version key
                .select('-__v')
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // find one user
    async getOneUsers(req, res) {
        try {
            const userData = await User.find({ _id: req.params.userId })
                // do not select version key
                .select('-__v')
                // subdoc thoughts and friends population
                .populate('thoughts')
                .populate('friends');
            // if we can not find this id 
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create a new user
    async createOneUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update one user
    async updateOneUser(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                // find which user to update by checking id
                { _id: req.params.userId },
                // send data by using opertor $set
                { $set: req.body },
                // check if the update match the user model and return the new file instead of old one
                { runValidators: true, new: true }
            );

            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // delete one user
    async deleteOneUser(req, res) {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.userId });
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // add new friend to user's friend list
    async addNewFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                // same as how we update one user, need to find user by checking user id
                { _id: req.params.userId },
                // $addToSet is checking if we have this friend id already or not,
                // it only add friend if you don't have this friend yet
                { $addToSet: { friends: req.params.friendId } },
                // returns new data instead of old one like how we did on update user, but we are only add friend id, 
                // so we don't have to check validate or not
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove a friend from a user's friend list
    async removeOneFriend(req, res) {
        try {
            // we use findOneAndUpdate because we only delete one friend each time
            // so we are update the friends array
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                // use $pull opertor to delete data
                { $pull: { friends: req.params.friendId } },
                { new: true });
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};