const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "post",
  password: "{tJ%zB4Wm@",
});

module.exports = pool.promise();
