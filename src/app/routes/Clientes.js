"use strict";
import express from "express";
import VerifyTokens from "../middleware/VerifyToken.js";
import ClientesController from "../controllers/ClientesControllers.js";
const ClientesRouter = express.Router();
const Clientes = new ClientesController();

ClientesRouter.get("/obtener-clientes", Clientes.ObtenerClientes)
  .post("/crear-cliente", Clientes.CrearCliente)
  .get("/codigo", Clientes.ObtenetCodigoCliente);

export default ClientesRouter;
