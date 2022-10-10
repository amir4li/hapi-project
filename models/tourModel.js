const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, "A tour must have a duration"]
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour must have a group size"]
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have a difficulty"],
        enum: {
            values: ["easy", "medium", "difficult"],
            message: "Difficulty is either: easy, medium, difficult"
        }
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A tour must have a price"]
    },
    priceDiscount: {
        type: Number
    },
    summery: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        tring: true
    },
    imageCover: {
        type: String,
        required: [true, "A tour must have a cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date],
    secretTour: {
        type: Boolean,
        default: false
    }
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;


