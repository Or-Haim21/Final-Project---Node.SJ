const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        numOfActions: {type: Number, required: true},
        currentlyAllowedActions: {type: Number, required: true}
    },
    {versionKey: false}
);

const User = mongoose.model('user', userSchema);
module.exports = User;
