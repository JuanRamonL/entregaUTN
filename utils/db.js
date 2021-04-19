
const mysql = require("mysql");
const util = require("util");

const pool = mysql.createConnection('mysql://bdaa226bdf9e10:c3e50ca1@us-cdbr-east-03.cleardb.com/heroku_4831284e22cb3e4?reconnect=true');

pool.query = util.promisify(pool.query);

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log(`error al conectar con la db ${error}`);
  } else {
    console.log("Se conecto a la db ");
  }
});

module.exports = pool;
