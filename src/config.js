require("dotenv").config();
module.exports = {
  Produccion: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "",
    host: process.env.HOSTPROD,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },

  Develomenp: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "",
    host: process.env.HOSTDEV,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
};
