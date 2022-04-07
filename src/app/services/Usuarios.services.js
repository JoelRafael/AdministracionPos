import UsuariosModel from "../models/UsuariosModel.js" 
import {config} from "../../config.js"
import {BaseDatos} from "../database/database.js"
//import {sequelize} from "../database/conexion.js"
export default class UsuariosServices {
obtenerusuarios(){  
config.databases=BaseDatos.Administracion;
//console.log(config)
return  UsuariosModel.findAll()
}

}
