const RecipeModel = require("../database/models/recipe_model");
const ItemModel = require("../database/models/item_model");

async function create(req, res) {
    let {name, ingredients, method, image} = req.body;

    await splitIngredients(ingredients)
        // .then(res => console.log(`res is ${res}`))
        .then(res => {
            ingredients = res;
            console.log(ingredients);
        })
        // .then(console.log(updatedIngredients))
        .catch(err => console.log(err));

    const recipe = await RecipeModel.create({ name, ingredients, method, image});

    res.json(recipe);
}

async function splitIngredients(ingredients){
    let newIngredients = []
    for (let i in ingredients) {
       await checkItem(ingredients[i])
       .then(res => newIngredients.push(res))
    //    .then(console.log(`Updated ingredients are ${newIngredients}`))
       .catch(err => console.log(err));
    }
    return newIngredients;
}

async function checkItem(ingredient){
    const item = await ItemModel.findOne({name: ingredient});
    if (item){
        return item;
    }
    console.log("item not found");
    return false;
}

module.exports = {
    create,
}