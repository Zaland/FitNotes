const environment = process.env.ENVIRONMENT || "development";
const config = require("../knexfile.ts")[environment];
const knex = require("knex")(config);
export default knex;
