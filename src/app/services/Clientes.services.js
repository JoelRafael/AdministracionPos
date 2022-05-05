"use strict";
import ClientesModel from "../models/ClientesModel.js";

export default class ClientesServices {
  ObtenerClientes() {
    return ClientesModel.findAll();
  }
  ObtenerCodioUltimoCliente() {
    return ClientesModel.findOne({
      order: [["ClienteId", "ASC"]],
      attributes: ["Codigo"],
    });
  }
  CrearCliente(Json) {
    return ClientesModel.create(Json);
  }
  GuardarTelefono() {}
}
