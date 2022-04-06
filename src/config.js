import 'dotenv/config';
export  const NombreBaseDeDtos = {
  bases:""
}
export const config={
  database:"",
  Produccion: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: NombreBaseDeDtos.bases,
    host: process.env.HOSTPROD,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
 Develomenp: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: NombreBaseDeDtos.bases,
    host: process.env.HOSTDEV,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  },
};
