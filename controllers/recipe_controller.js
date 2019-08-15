const RecipeModel = require("../database/models/recipe_model");
const ItemModel = require("../database/models/item_model");

async function create(req, res) {
    let {name, ingredients, method, image} = req.body;

    await splitIngredients(ingredients)
        .then(res => {
            ingredients = res;
            console.log(ingredients);
        })
        .catch(err => console.log(err));

    const recipe = await RecipeModel.create({ name, ingredients, method, image});

    res.json(recipe);
}

async function splitIngredients(ingredients){
    let newIngredients = []
    for (let i in ingredients) {
       await checkItem(ingredients[i])
       .then(res => newIngredients.push(res))
       .catch(err => console.log(err));
    }
    return newIngredients;
}

async function checkItem(ingredient){
    const item = await ItemModel.findOne({name: ingredient});
    if (item){
        return item;
    }
    else {
        createItem(ingredient)
    }
    console.log("item not found");
    return false;
}

async function createItem(ingredient){
    console.log(ingredient);
    const item = await ItemModel.create({name: ingredient});
    return item;
}

module.exports = {
    create,
}