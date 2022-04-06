"use strict";
import express from "express";
import {UsuariosController} from '../controllers/UsuariosController.js';
export const AdministracionRouter = express.Router();
const Usuairo = new UsuariosController()

AdministracionRouter
.get("/usuarios", Usuairo.obtenerusuario)



