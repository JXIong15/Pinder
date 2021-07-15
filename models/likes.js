const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likesSchema = new Schema({
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }]
})

const Likes = mongoose.model("Likes", likesSchema);

module.exports = Likes;