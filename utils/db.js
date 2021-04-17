
const mysql = require("mysql");
const util = require("util");

const pool = mysql.createConnection('mysql://bdc83fe0a17e9d:e6f1c4f5@us-cdbr-east-03.cleardb.com/heroku_b29b773123769bc?reconnect=true');

pool.query = util.promisify(pool.query);

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log(`error al conectar con la db ${error}`);
  } else {
    console.log("Se conecto a la db ");
  }
});

module.exports = pool;
