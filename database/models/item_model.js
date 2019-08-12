const mongoose = require("mongoose");
const ItemSchema = require("./../schemas/item_schema");

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;