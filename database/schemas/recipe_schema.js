const { Schema } = require("mongoose");
const ItemSchema = require("./item_schema");

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [ItemSchema],
    method: {
        type: Array,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = RecipeSchema;