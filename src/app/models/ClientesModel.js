"use strict";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/conexion.js";

export default class ClientesModel extends Model {}
ClientesModel.init(
  {
    ClienteId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Codigo: {
      type: DataTypes.STRING,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Domicilio: {
      type: DataTypes.STRING,
    },
    Provincia: {
      type: DataTypes.STRING,
    },
    Rnc: {
      type: DataTypes.STRING,
    },
    Estado: {
      type: DataTypes.INTEGER,
    },
    Creado: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "cliente",
  }
);
