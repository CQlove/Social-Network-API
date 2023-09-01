const { User, Thought } = requrie('../models');

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
            const userData = await User.findOneAndDelete({ _id: req.params.userId })
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' })
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};