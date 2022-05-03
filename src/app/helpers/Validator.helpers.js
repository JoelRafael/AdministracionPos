"use strict";
import { validationResult } from "express-validator";

const Validatresult = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  return next();
};
export default Validatresult;
