var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "24DimethylPyrrole!",
    database: "burbers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;