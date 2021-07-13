const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    intent: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    sex: { type: String, required: true },
    location: [{
        city: { type: String, required: true },
        state: { type: String, required: true }
    }],
    pictures: [{ type: String, required: true}],
    bio: String
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;