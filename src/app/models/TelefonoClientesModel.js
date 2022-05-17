import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/conexion.js";

export default class TelefonoClientesModel extends Model {}
TelefonoClientesModel.init(
  {
    Id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    ClienteId: {
      type: DataTypes.NUMBER,
    },
    Telefono: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "TelefonoCliente",
  }
);
