const { Schema } = require("mongoose");

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
    },
    protein: {
        type: Number,
        required: true
    },
    carbohydrates: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    sugar: {
        type: Number,
        required: true
    }
});

module.exports = ItemSchema;