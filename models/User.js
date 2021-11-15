const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        // String, unique, required, trimmed
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        // String, required, unique, must match a valid email address
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/],
    },
    thoughts: [{
        // array of _id values ref. Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],
    friends: [{
        // array of _id values ref. User model
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
},
    {
        toJSON: {
            virtuals: true
        }
    });
UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})


// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;