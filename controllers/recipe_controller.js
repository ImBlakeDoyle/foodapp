const RecipeModel = require("../database/models/recipe_model");
const ItemModel = require("../database/models/item_model");

async function create(req, res) {
    let {name, ingredients, method, image} = req.body;
    // console.log(ingredients)

    for (let i in ingredients) {
        // console.log(ingredients[i]);
        checkItem(ingredients[i]);
    }


    const recipe = await RecipeModel.create({ name, ingredients, method, image});

    res.json(recipe);
}

async function checkItem(ingredient){
    const item = await ItemModel.findOne({name: ingredient});
    if (item){
        console.log("found item");
        return item;
    }
    console.log("item not found");
    return false;
}

module.exports = {
    create,
}