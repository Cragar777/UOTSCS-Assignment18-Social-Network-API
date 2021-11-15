const { User, Thought } = require("../models");
const thoughtMethods = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // add a reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, {
            $addToSet: { friends: req.params.friendsId }
        })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // delete a reaction   
    deleteReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, {
            $pull: { friends: req.params.friendsId }
        })
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
}
module.exports = thoughtMethods;