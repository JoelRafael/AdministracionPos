const UsuariosModel = require('../models/UsuariosModel')
const config = require('../../config')
const Database = config.database;
//const Databases = require('../database/database')
class UsuariosServices {
obtenerusuarios(){
Database=Databases.Administracion;    
UsuariosModel.finAll().then(usuarios=>{
return usuarios;
})
}
}
module.exports = UsuariosServices;