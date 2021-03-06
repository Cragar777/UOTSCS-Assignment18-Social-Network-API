const {Schema, Types} = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maximum: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
        // Need to add date formatting
    }},

    {
        toJSON: {
            getters: true
        }
    }    
);

module.exports = ReactionSchema;