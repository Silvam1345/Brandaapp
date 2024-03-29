const express = require("express");
const path = require("path");
//app.listen(path, () => console.info(), path);
const bodyParser = require("body-parser");
const DB = require("./db");
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.info("Server has started on", PORT));
let newShip = require("./routes/newShip");

// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/",newShip);
