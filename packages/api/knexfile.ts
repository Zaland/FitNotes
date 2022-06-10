import dotenv from "dotenv";
dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      port: process.env.API_PORT,
      user: process.env.API_USER,
      password: process.env.API_PASSWORD,
      database: process.env.API_DATABASE,
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
