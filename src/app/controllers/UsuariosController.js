'use strict'
import {UsuariosModel} from '../models/UsuariosModel.js'
  export class UsuariosController{
   obtenerusuario(req, res){
    UsuariosModel.findAll().then(usuario=>{
    res.json(res)
    })
}}
//exports = UsuariosController;