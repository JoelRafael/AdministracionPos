import bcrypt from "bcryptjs";
export default class HashHelpers {
  encriptar(password) {
    let Password = bcrypt.hash(password, 9);
    return Password;
  }
  desecriptar(password, hash) {
    let compare = bcrypt.compare(password, hash);
    return compare;
  }
}
