"use strict";
import UsuariosServices from "../services/Usuarios.services.js";
import ReturnMessageHelpers from "../helpers/ReturnMessage.helpers.js";
import jwt from "jsonwebtoken";
import HashHelpers from "../helpers/Hash.helpers.js";
const ServicesUsuario = new UsuariosServices();
const messageHelpers = new ReturnMessageHelpers();
const Hash = new HashHelpers();
export class UsuariosController {
  //Obtengo todos los usuarios
  obtenerusuario(req, res) {
    var Usuarios = ServicesUsuario.obtenerusuarios();
    Usuarios.then((usuarios) => {
      res.json(messageHelpers.Message(200, false, "", usuarios));
    });
  }
  createusers(req, res) {
    Hash.encriptar(req.body.Password).then((has) => {
      const data = {
        RolId: req.body.RolId,
        SexoId: req.body.SexoId,
        Codigo: req.body.Codigo,
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Identificacion: req.body.Identificacion,
        FechaNacimiento: req.body.FechaNacimiento,
        Correo: req.body.Correo,
        Usuario: req.body.Usuario,
        Password: has,
        Estado: req.body.Estado,
        Creado: new Date(),
      };
      res.json(data);
    });
  }
  login(req, res) {
    //const user = {
    //  name: "jparedes",
    //  password: "12345jp",
    //};
    //jwt.sign({ user }, "secretkey", (err, token) => {
    //  res.json(token);
    //});
    let password = "jparedes";
    let pas = Hash.encriptar(password).then((has) => {
      let compare = Hash.desecriptar(password, has).then((ress) => {
        res.send(ress);
      });
    });
  }
}
