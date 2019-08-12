const RecipeModel = require("../database/models/recipe_model");

async function create(req, res) {
    const {name, ingredients, method, image} = req.body;

    const recipe = await RecipeModel.create({ name, ingredients, method, image});

    res.json(recipe);
}

module.exports = {
    create,
}