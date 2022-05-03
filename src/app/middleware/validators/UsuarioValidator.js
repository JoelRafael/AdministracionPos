import { body } from "express-validator";
import Validatresult from "../../helpers/Validator.helpers.js";
const UsuarioValidator = [
  body("SexoId", "El sexo es requerido").exists().not().isEmpty(),
  body("Nombre", "El nombre es requerido").exists().not().isEmpty(),
  body("Apellido", "El Apellido es requerido").exists().not().isEmpty(),
  body("Identificacion", "La identificacion es requerida")
    .exists()
    .not()
    .isEmpty(),
  body("FechaNacimiento", "La fecha de nacimiento es requerida")
    .exists()
    .not()
    .isEmpty(),
  body("Direccion", "La direccion es requerida").exists().not().isEmpty(),
  body("Correo", "El correo es requerido y un correo valido")
    .exists()
    .not()
    .isEmpty()
    .isEmail(),
  body("Usuario", "El usuario es requerido").exists().not().isEmpty(),
  body("Password", "La password es requerida").exists().not().isEmpty(),
  (req, res, next) => {
    Validatresult(req, res, next);
  },
];
export default UsuarioValidator;
