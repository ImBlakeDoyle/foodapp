const ItemModel = require("./../database/models/item_model");

async function create(req, res) {
    
    const { name, quantity, category, measurement, protein, carbs, fat, sugar } = req.body;

    const foundItem = await checkItemExists(name)
    
    if (foundItem){
        await addQuantity(foundItem, quantity);
    }

    let { weight, price } = req.body;

    const calories = await calculateCalories(protein, carbs, fat);

    weight = await calculateIndividual(weight, quantity);
    price = await calculateIndividual(price, quantity);

    const item = await ItemModel.create({ name, category, quantity, weight, measurement, price, protein, carbs, fat, sugar, calories});

    res.json(item);
}

async function checkItemExists(name){
    const item = await ItemModel.findOne({name: name});
    if (item){
        console.log("found item");
        return item;
    }
    console.log("item not found");
    return false;
}

async function addQuantity(foundItem, quantity){
    let oldQuantity = Number(foundItem.quantity);
    let newQuantity = Number(quantity);
    let newestQuantity = (oldQuantity + newQuantity);
    const item = await ItemModel.findOneAndUpdate(foundItem._id, {quantity: newestQuantity});
    return;
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