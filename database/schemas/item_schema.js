const { Schema } = require("mongoose");

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    }, 
    weight: {
        type: Number,
        required: true
    },
    measurement: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
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
    },
    calories: {
        type: Number,
    }
});

module.exports = ItemSchema;