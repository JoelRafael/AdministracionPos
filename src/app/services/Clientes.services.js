"use strict";
import ClientesModel from "../models/ClientesModel.js";

export default class ClientesServices {
  ObtenerClientes() {
    return ClientesModel.findAll();
  }
}
