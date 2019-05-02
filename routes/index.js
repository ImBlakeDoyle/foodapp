const express = require("express");
const router = express.Router();
const ItemRoutes = require("./item_routes");

// Waits to receive a url request that matches "/", then performs the res.send 
router.get("/", (req, res) => res.send("Home"));

router.use("/item", ItemRoutes);

module.exports = router;