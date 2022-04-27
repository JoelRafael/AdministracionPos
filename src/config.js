import 'dotenv/config';
export var config={
  databases:"administracion",
  Produccion: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOSTPROD,
    dialect: "mysql",
    logging:false,
    define: {
      timestamps: false,
    },
  },
 Develomenp: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOSTDEV,
    dialect: "mysql",
    logging:false,
    define: {
      timestamps: false,
    },
  },
};
