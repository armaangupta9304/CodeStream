const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    codesWritten: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Code'
        }
    ],
    profile: {}
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;