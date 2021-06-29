const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})

const Likes = mongoose.model("Likes", likesSchema);

module.exports = Likes;