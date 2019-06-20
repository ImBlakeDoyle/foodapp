const ItemModel = require("./../database/models/item_model");

async function create(req, res) {
    const { name, quantity, category, measurement, protein, carbs, fat, sugar } = req.body;
    let { weight, price } = req.body;

    const calories = await calculateCalories(protein, carbs, fat);

    weight = await calculateIndividual(weight, quantity);
    price = await calculateIndividual(price, quantity);

    const item = await ItemModel.create({ name, category, quantity, weight, measurement, price, protein, carbs, fat, sugar, calories});

    res.json(item);
}

async function update(req, res, next) {
        const { id } = req.params;
        console.log(id);
        const { quantity } = req.body;
        const item = await ItemModel.findOneAndUpdate(id, {quantity});

        console.log(item);
        return res.json(item);
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
    let cal = (Math.round((protein * 4) + (carbs * 4) + (fat * 9)))
    return cal.toFixed(2);
}

function calculateIndividual(x, quantity){
    return (x/quantity).toFixed(2);
}

module.exports = {
    create,
    index,
    update,
    findItem
}