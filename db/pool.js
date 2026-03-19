const { Pool } = require("pg");
const envVars = require('../env.js');

module.exports = new Pool({
  connectionString: envVars.conString
});