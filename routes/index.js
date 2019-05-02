const express = require("express");
const router = express.Router();

// Waits to receive a url request that matches "/", then performs the res.send 
router.get("/", (req, res) => res.send("Home"));

module.exports = router;