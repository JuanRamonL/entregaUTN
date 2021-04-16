
const mysql = require("mysql");
const util = require("util");

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

let pool = mysql.createPool({
  host: DB_HOST || "localhost",
  port: DB_PORT || 3306,
  password: DB_PASS || "",
  user: DB_USER || "root",
  database: DB_NAME || "spa-pwi-repaso",
  connectionLimit: 10,
});

pool.query = util.promisify(pool.query);

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log(`error al conectar con la db ${error}`);
  } else {
    console.log("Se conecto a la db ");
  }
});

module.exports = pool;
