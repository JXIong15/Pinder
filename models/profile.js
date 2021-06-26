const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: Number, required: true },
    location: [{
        city: { type: String, required: true },
        state: { type: String, required: true }
    }],
    bio: String
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;