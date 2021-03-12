const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        default: 'No Description.'
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const codeModel = mongoose.model("Code", codeSchema);
module.exports = codeModel