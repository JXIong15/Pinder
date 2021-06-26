const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    matches: [
        {
            user: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})

const Matches = mongoose.model("Matches", matchesSchema);

module.exports = Matches;