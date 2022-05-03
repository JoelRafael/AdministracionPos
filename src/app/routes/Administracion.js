"use strict";
import express from "express";
import { UsuariosController } from "../controllers/UsuariosController.js";
import VerifyTokens from "../middleware/VerifyToken.js";
import LoginValidator from "../middleware/validators/LoginValidator.js";
import UsuarioValidator from "../middleware/validators/UsuarioValidator.js";
export const AdministracionRouter = express.Router();
const Usuairo = new UsuariosController();

AdministracionRouter.get("/usuarios", VerifyTokens, Usuairo.obtenerusuario)
  .post("/login", LoginValidator, Usuairo.login)
  .post("/create-user", UsuarioValidator, Usuairo.createusers)
  .post("/cambiar-estado", VerifyTokens, Usuairo.estadousuario);
