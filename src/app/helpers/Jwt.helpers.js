import jwt from "jsonwebtoken";
export default class JwtHelpers {
  CreateToken(user) {
    jwt.sign({ user }, "secretkey", { expiresIn: "8h" }, (err, token) => {
      return token;
    });
  }
}
