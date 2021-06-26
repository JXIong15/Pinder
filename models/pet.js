const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    petName: String,
    petAge: Number,
    petGender: Number,
    petType: String,
    petBreed: String,
    petEnergy: Number,
    petBio: String
})

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;