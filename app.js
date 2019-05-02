const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

// Sets the frontend domain to enable CORS
app.use(cors({
    origin: process.env.FRONT_END_DOMAIN
}));

// makes url-encoded data parsed with querystring library
// Doesn't allow for nested objects
// E.g. Nested Object = { person: { name: blake } }
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes"));

module.exports = app;