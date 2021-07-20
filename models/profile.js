const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    intent: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    sex: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pictures: [{ type: String}],
    bio: String,
    likes: {
        type: Schema.Types.ObjectId,
        ref: "Likes"
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: "Reviews"
    }
}, {
    versionKey: false
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;