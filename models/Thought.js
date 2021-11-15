const { Schema, model } = require('mongoose');
const ReactionSchema = require("./reactionSchema.js")
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Need to add date formatting
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema],
},
    {
        toJSON: {
            getters: true
        }
    });
ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;