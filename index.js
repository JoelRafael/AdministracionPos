"use strict";
const express = require("express");
const app = express();
const morgan = require("morgan");
//const connection = require("./database/db");
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(express.json());
//app.use(require("./routes"));
//Listen server//

app.get("/", (req, res) => {
  res.json({ hola: "Mundo" });
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
