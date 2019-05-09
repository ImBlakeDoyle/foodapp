const ItemModel = require("./../database/models/item_model");

async function create(req, res) {
    const { name, quantity, measurement, price, protein, carbs, fat, sugar } = req.body;
    let { weight } = req.body;

    const calories = await calculateCalories(protein, carbs, fat);

    weight = await calculateIndividualWeight(weight, quantity);

    const item = await ItemModel.create({ name, quantity, weight, measurement, price, protein, carbs, fat, sugar, calories});

    res.json(item);
}

async function index(req, res) {
    const itemList = await ItemModel.find();
    res.json(itemList);
}

async function findItem(req, res) {
    const name = req.body;
    const item = await ItemModel.findOne({ name });

    res.json(item);
}

function calculateCalories(protein, carbs, fat) {
    return (Math.round((protein * 4) + (carbs * 4) + (fat * 9)));
}

function calculateIndividualWeight(weight, quantity){
    return (weight/quantity);
}

module.exports = {
    create,
    index,
    findItem
}