const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/recipe_controller");

router.post("/new", RecipeController.create);

module.exports = router;