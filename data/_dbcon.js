const mysql = require("mysql");

// create connection

const db = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database",
});
// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

module.exports = db;
