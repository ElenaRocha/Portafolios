const mysql = require("mysql");
const SQL = require("sql-template-strings");
const bcrypt = require("bcryptjs");

const connectionInfoSQL = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "listatareas",
};

module.exports = {
  addUser: async function (userInfo) {
    let data;
    const { username, password } = userInfo;

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const connection = mysql.createConnection(connectionInfoSQL);
    connection.connect();

    const myquery = SQL`INSERT INTO users(username, password) 
        VALUES(${username}, ${encryptedPassword});`;

    connection.query(myquery, function (err, rows, fields) {
      if (err) throw new Error("Error al conectar a BBDD", err);
      data = rows;
    });

    connection.end();
    return data;
  },
  checkUser: (username) => {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(connectionInfoSQL);
      connection.connect();
      const myquery = SQL`SELECT username, password FROM users WHERE username = ${username};`;

      connection.query(myquery, function (err, rows, fields) {
        if (err) reject(err);
        resolve(rows);
      });

      connection.end();
    });
  },
};
