import UsuariosModel from "../models/UsuariosModel.js" 
import {NombreBaseDeDtos, config} from "../../config.js"
import {BaseDatos} from "../database/database.js"
export default class UsuariosServices {
obtenerusuarios(){  
NombreBaseDeDtos.bases=BaseDatos.Administracion;
console.log(config.Develomenp)
return  UsuariosModel.findAll()
}

}
