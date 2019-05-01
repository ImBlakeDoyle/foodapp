// Requires and configures dotenv at start of application
require("dotenv").config();
require("./database/connect");
const app = require("./app");

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
