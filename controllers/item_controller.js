const ItemModel = require("./../database/models/item_model");

async function create(req, res) {
    const { name, weight, price, protein, carbs, fat, sugar } = req.body;

    const calories = await calculateCalories(protein, carbs, fat);

    const item = await ItemModel.create({ name, weight, price, protein, carbs, fat, sugar, calories});

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
    return ((protein * 4) + (carbs * 4) + (fat * 4));
}

module.exports = {
    create,
    index,
    findItem
}