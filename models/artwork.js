const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Artwork = mongoose.model("artwork", artworkSchema);

module.exports = Artwork;