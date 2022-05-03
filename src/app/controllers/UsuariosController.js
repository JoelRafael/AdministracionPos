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
    ServicesUsuario.obtenerultimousuario().then(
      (resp) => {
        let codigo = parseInt(resp.Codigo);
        Hash.encriptar(req.body.Password).then((has) => {
          const data = {
            RolId: req.body.RolId,
            SexoId: req.body.SexoId,
            Codigo: codigo + 1,
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Identificacion: req.body.Identificacion,
            FechaNacimiento: new Date(), //req.body.FechaNacimiento,
            Correo: req.body.Correo,
            Usuario: req.body.Usuario,
            Password: has,
            Estado: req.body.Estado,
            Creado: new Date(),
          };
          ServicesUsuario.crearusuario(data).then(
            (rep) => {
              res.json(
                messageHelpers.Message(
                  200,
                  false,
                  "Usuario creado con exito",
                  ""
                )
              );
            },
            (err) => {
              res
                .status(500)
                .json(
                  messageHelpers.Message(
                    500,
                    true,
                    "Hubo un problema al registrar el nuevo usuarios",
                    err
                  )
                );
            }
          );
        });
      },
      (err) => {
        res
          .status(500)
          .json(
            messageHelpers.Message(
              500,
              true,
              "Hubo un problma en el servidor",
              err
            )
          );
      }
    );
  }
  login(req, res) {
    const user = {
      name: req.body.user,
      password: req.body.password,
    };
    ServicesUsuario.Login(user).then(
      (resp) => {
        if (resp.Estado != 1) {
          res
            .status(400)
            .json(
              messageHelpers.Message(
                400,
                true,
                "Este usuario no esta activo, debe comuincarse con el administrador",
                ""
              )
            );
        }
        Hash.desecriptar(user.password, resp.Password).then((respHas) => {
          if (respHas) {
            jwt.sign(
              { user },
              "secretkey",
              { expiresIn: "8h" },
              (err, token) => {
                const ReponseUser = {
                  resp,
                  token,
                };
                res.json(messageHelpers.Message(200, false, "", ReponseUser));
              }
            );
          } else {
            res
              .status(400)
              .json(
                messageHelpers.Message(400, true, "password incorrecta", "")
              );
          }
        });
      },
      (err) => {
        res
          .status(404)
          .json(
            messageHelpers.Message(404, true, "Este usuario no existe", err)
          );
      }
    );
  }
  estadousuario(req, res) {
    const json = {
      Estado: req.body.Estado,
      Codigo: req.body.Codigo,
    };
    ServicesUsuario.estadousuario(json).then((resp) => {
      if (resp > 0) {
        res.json(
          messageHelpers.Message(
            201,
            false,
            "El estado ha cambiado con existo",
            resp
          )
        );
      } else {
        res
          .status(500)
          .json(
            messageHelpers.Message(
              500,
              true,
              "Hubo un error al cambiar el estado",
              resp
            )
          );
      }
    });
  }
}
