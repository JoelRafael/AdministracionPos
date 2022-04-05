"use estrict";
const express = require("express");
const Router = express.Router();

Router.get("/administracion/roles", (req, res) => {
  res.send("Accediendo a la ruta de roles");
});

module.exports = Router;
