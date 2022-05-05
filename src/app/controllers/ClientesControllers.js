"use strict";
import ClientesServices from "../services/Clientes.services.js";
import ReturnMessageHelpers from "../helpers/ReturnMessage.helpers.js";
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
  ObtenetCodigoCliente() {
    ClienteServices.ObtenerCodioUltimoCliente().then((res) => {
      if (res == null) {
        const PrimerCodigo = new ClientesController().GenerarCodigoCliente(0);
        return PrimerCodigo;
      } else {
        const Codigo = new ClientesController().GenerarCodigoCliente(
          parseInt(res)
        );
        return Codigo;
      }
    });
  }
  GenerarCodigoCliente(Codigo) {
    let numberOutput = Math.abs(Codigo + 1);
    let length = Codigo.toString().length;
    let FirtLetra = "C";
    let zero = "0";
    return FirtLetra + zero.repeat(8 - length) + numberOutput.toString();
  }
  CrearCliente(req, res) {
    //const Json = {
    //  Codigo: req.body.Codigo,
    //  Nombre: req.body.Nombre,
    //  Domicilio: req.body.Domicilio,
    //  Provincia: req.body.Provincia,
    //  Telefono: req.body.Telefono,
    //  Rnc: req.body.Rnc,
    //  Estado: 1,
    //  Creado: new Date(),
    //};
    // const cod = new ClientesController();
    cod = this.GenerarCodigoCliente(1);
    res.send(cod);
  }
}
