"use strict";
import ClientesModel from "../models/ClientesModel.js";
import TelefonoClientesModel from "../models/TelefonoClientesModel.js";

export default class ClientesServices {
  ObtenerClientes() {
    return ClientesModel.findAll({
      where: {
        Estado: 1,
      },
    });
  }
  async ObtenerCodioUltimoCliente() {
    const Ultimocodigo = await ClientesModel.findOne({
      order: [["ClienteId", "ASC"]],
      attributes: ["Codigo"],
    });
    return Ultimocodigo;
  }
  CrearCliente(Json) {
    return ClientesModel.create(Json);
  }
  GuardarTelefono(Json) {
    const IdCliente = ClientesModel.findOne({
      where: {
        Codigo: Json.Codigo,
      },
      attributes: ["ClienteId"],
    });
    return IdCliente.then(
      (res) => {
        return TelefonoClientesModel.create({
          ClienteId: res.ClienteId,
          Telefono: Json.Telefono,
        });
      },
      (err) => {
        return err;
      }
    );
  }
  ActualizarCliente(Json) {
    return ClientesModel.update(Json, {
      where: Json.Codigo,
    });
  }
}
