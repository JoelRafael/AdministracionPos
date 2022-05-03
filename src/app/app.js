"use strict";
import express from "express";
const app = express();
import morgan from "morgan";
import "dotenv/config";
import { AdministracionRouter } from "./routes/Administracion.js";
import ClientesRouter from "./routes/Clientes.js";
const port = process.env.PORT || 3000;
import { sequelize } from ".././app/database/conexion.js";
app.use(morgan("dev"));
app.use(express.json());
//Area donde se llamaran los Middleware de Rutas
app.use(AdministracionRouter);
app.use(ClientesRouter);
//End

//Area donde correra el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  //Area donde estamos estableciendo la conexion
  sequelize.authenticate().then(
    () => {
      console.log(`Conexion establecida con exito`);
    },
    (error) => {
      console.log(`Hubo un error al conectar: ${error}`);
    }
  );
});
//End
