const mysql = require("mysql");
const SQL = require("sql-template-strings");

const connectionInfoSQL = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "listatareas",
};

module.exports = {
  getTasks: function () {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(connectionInfoSQL);
      connection.connect();

      const myquery = SQL`SELECT title FROM tasks;`;
      connection.query(myquery, function (err, rows, fields) {
        if (err) reject(err);
        resolve(rows);
      });

      connection.end();
    });
  },
  inspectTask: function (id) {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(connectionInfoSQL);
      connection.connect();

      const myquery = SQL`SELECT title, description FROM tasks
    WHERE id = ${id};`;

      connection.query(myquery, function (err, rows, fields) {
        if (err) reject(err);
        resolve(rows);
      });

      connection.end();
    });
  },
  createTask: function (task) {
    const connection = mysql.createConnection(connectionInfoSQL);
    connection.connect();

    const myquery = SQL`INSERT INTO tasks(title, description)
                    VALUES (${task.title}, ${task.description});`;

    connection.query(myquery, function (err, rows, fields) {
      if (err) throw new Error("Error al conectar a BBDD", err);
      console.log("Datos guardados");
    });

    connection.end();
  },
  updateTask: function (task, id) {
    const connection = mysql.createConnection(connectionInfoSQL);
    connection.connect();

    /*connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }

      console.log("connected as id " + connection.threadId);
    });*/

    const myquery = SQL`UPDATE tasks
                    SET title = ${task.title}, description = ${task.description}
                    WHERE id = ${id};`;

    connection.query(myquery, function (err, rows, fields) {
      if (err) throw new Error("Error al conectar a BBDD", err);
      console.log("Datos guardados");
    });

    connection.end();
  },
  eraseTask: function (id) {
    const connection = mysql.createConnection(connectionInfoSQL);
    connection.connect();

    const myquery = SQL`DELETE FROM tasks
                    WHERE id = ${id};`;

    connection.query(myquery, function (err, rows, fields) {
      if (err) throw new Error("Error al conectar a BBDD", err);
      console.log("Datos borrados");
    });

    connection.end();
  },
};
