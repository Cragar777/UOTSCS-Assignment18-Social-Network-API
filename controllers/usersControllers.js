const { User, Thought } = require("../models");
const userMethods = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.id })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // add a friend
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, {
            $addToSet: { friends: req.params.friendsId }
        })
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
// delete a friend   
deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, {
        $pull: { friends: req.params.friendsId }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
},
}
module.exports = userMethods;