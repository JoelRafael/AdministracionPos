'use strict'
import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../database/conexion.js'

export class UsuariosModel extends Model {}
UsuariosModel.init({
UsuarioId:DataTypes.INTEGER,

RolId:DataTypes.INTEGER,

SexoId:DataTypes.INTEGER,

Codigo:DataTypes.STRING,

Nombre:DataTypes.STRING,

Apellido:DataTypes.STRING,

Identificacion:DataTypes.STRING,

FechaNacimiento:DataTypes.DATE,

Correo:DataTypes.STRING,

Usuario:DataTypes.STRING,

Password:DataTypes.STRING,

Estado:DataTypes.INTEGER,

Creado:DataTypes.DATE,
},{
    sequelize,
    modelName:'usuario'
});

