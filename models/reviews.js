const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    reviews: [{
        reviewer: {
            type: Schema.Types.ObjectId,
            ref: "Profile"
        },
        title: String,
        body: String,
        rating: Number
    }]
})

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;