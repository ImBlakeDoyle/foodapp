const mongoose = require("mongoose");
const RecipeSchema = require("./../schemas/recipe_schema");

const RecipeModel = mongoose.model("Recipe", RecipeSchema);

module.exports = RecipeModel;