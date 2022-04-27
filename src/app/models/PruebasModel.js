'use strict'
import {Model, DataTypes} from 'sequelize';
//import {sequelize} from '../database/conexion.js'

export default class PruebasModel extends Model {}
PruebasModel.init({
Id:DataTypes.INTEGER,
Nombre:DataTypes.STRING
},{
    sequelize,
    modelName:'prueba'
});

