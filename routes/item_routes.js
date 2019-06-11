const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const ItemController = require("../controllers/item_controller");

router.post("/new", ItemController.create);

router.get("/all", ItemController.index);

router.patch("/:id", ItemController.update);

module.exports = router;