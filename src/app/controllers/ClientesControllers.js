"use strict";
import ClientesServices from "../services/Clientes.services.js";
import ReturnMessageHelpers from "../helpers/ReturnMessage.helpers.js";
import Descodificar from "../helpers/DescodificarCodigo.helpers.js";
import GeneralCodigo from "../helpers/GeneralCodigo.helpers.js";
const ClienteServices = new ClientesServices();
const MessageHelpers = new ReturnMessageHelpers();
export default class ClientesController {
  constructor() {}
  ObtenerClientes(req, res) {
    ClienteServices.ObtenerClientes().then(
      (resp) => {
        res.json(MessageHelpers.Message(200, false, "", resp));
      },
      (err) => {
        res
          .status(500)
          .json(
            MessageHelpers.Message(
              500,
              true,
              "Hubo un problema en el servidor",
              ""
            )
          );
      }
    );
  }
  async CrearCliente(req, res) {
    const Json = {
      Codigo: await ClientesControllers.ObtenetCodigoCliente(),
      Nombre: req.body.Nombre,
      Domicilio: req.body.Domicilio,
      Provincia: req.body.Provincia,
      Telefono: req.body.Telefono,
      Rnc: req.body.Rnc,
      Estado: 1,
      Creado: new Date(),
    };
    console.log(Json);
    ClienteServices.CrearCliente(Json).then(
      (resp) => {
        ClienteServices.GuardarTelefono(Json).then(
          (rep) => {
            res
              .status(201)
              .json(
                MessageHelpers.Message(
                  201,
                  false,
                  "Cliente registrado con exito",
                  ""
                )
              );
          },
          (err) => {
            return res
              .status(500)
              .json(
                MessageHelpers.Message(
                  500,
                  true,
                  "Hubo un problema al intentar registrar el telefono del cliente",
                  err
                )
              );
          }
        );
      },
      (errs) => {
        return res
          .status(500)
          .json(
            MessageHelpers.Message(
              500,
              true,
              "Hubo un problema al intentar registrar el cliente",
              ""
            )
          );
      }
    );
  }
  async ActuliazarCliente(req, res) {
    const Json = {
      Codigo: req.body.Codigo,
      Nombre: req.body.Nombre,
      Domicilio: req.body.Domicilio,
      Provincia: req.body.Provincia,
      Telefono: req.body.Telefono,
      Rnc: req.body.Rnc,
      Estado: req.body.Estado,
    };
  }

  ObtenetCodigoCliente() {
    let Codigo = ClienteServices.ObtenerCodioUltimoCliente().then((resp) => {
      if (resp == null) {
        return GeneralCodigo("C", 0, 8);
      } else {
        const PreCodigo = Descodificar(resp.Codigo);
        return GeneralCodigo("C", PreCodigo, 8);
      }
    });
    return Codigo;
  }
}
const ClientesControllers = new ClientesController();
