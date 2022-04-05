"use strict";
const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 3000;
const RouteAdministracion = require("../app/routes/Administracion");
const config = require("../config");

app.use(morgan("dev"));
app.use(express.json());
//Area donde se llamaran los Middleware de Rutas
app.use(RouteAdministracion);
//End

//Area donde correra el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//End
