import UsuariosModel from "../models/UsuariosModel.js";
import { BaseDatos } from "../database/database.js";

export default class UsuariosServices {
  obtenerusuarios() {
    return UsuariosModel.findAll();
  }
}
