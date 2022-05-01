import "dotenv/config";
export var config = {
  databases: "administracion",
  Produccion: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOSTPROD,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
    },
  },
  Develomenp: {
    username: "jparedes",
    password: "jparedes",
    host: "localhost",
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
    },
  },
};
