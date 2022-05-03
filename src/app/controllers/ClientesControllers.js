"use strict";
import ClientesServices from "../services/Clientes.services.js";
import ReturnMessageHelpers from "../helpers/ReturnMessage.helpers.js";
const ClienteServices = new ClientesServices();
const MessageHelpers = new ReturnMessageHelpers();
export default class ClientesController {
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
}
