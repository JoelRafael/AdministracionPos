"use strict";
import { body } from "express-validator";
import Validatresult from "../../helpers/Validator.helpers.js";

const LoginValidator = [
  body("user", "El usuario es requerido, ingrese un usuario valido")
    .exists()
    .not()
    .isEmpty(),
  body("password", "La password es requerida, ingrese una password valida")
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => {
    Validatresult(req, res, next);
  },
];

export default LoginValidator;
