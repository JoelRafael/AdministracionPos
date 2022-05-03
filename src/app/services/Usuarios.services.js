import UsuariosModel from "../models/UsuariosModel.js";
import { BaseDatos } from "../database/database.js";

export default class UsuariosServices {
  obtenerusuarios() {
    return UsuariosModel.findAll();
  }
  obtenerultimousuario() {
    return UsuariosModel.findOne({
      order: [["UsuarioId", "ASC"]],
      attributes: ["Codigo"],
    });
  }
  crearusuario(json) {
    return UsuariosModel.create(json);
  }
  Login(user) {
    return UsuariosModel.findOne({
      where: { Usuario: user.name },
    });
  }
  estadousuario(json) {
    return UsuariosModel.update(
      { Estado: json.Estado },
      {
        where: {
          Codigo: json.Codigo,
        },
      }
    );
  }
}
