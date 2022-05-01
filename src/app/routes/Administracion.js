"use strict";
import express from "express";
import { UsuariosController } from "../controllers/UsuariosController.js";
import VerifyTokens from "../middleware/VerifyToken.js";
export const AdministracionRouter = express.Router();
const Usuairo = new UsuariosController();

AdministracionRouter.get("/usuarios", VerifyTokens, Usuairo.obtenerusuario)
  .get("/login", Usuairo.login)
  .post("/create-user", Usuairo.createusers);
