'use strict'
import UsuariosServices from "../services/Usuarios.services.js"
import ReturnMessageHelpers from "../helpers/ReturnMessage.helpers.js"
const ServicesUsuario = new UsuariosServices();
const messageHelpers = new ReturnMessageHelpers();
 export class UsuariosController{
      //Obtengo todos los usuarios
       obtenerusuario(req, res){
        var Usuarios = ServicesUsuario.obtenerusuarios(); 
        Usuarios.then(usuarios=>{
            res.json(messageHelpers.Message(200, false, "", usuarios))  
        })
        }
}
