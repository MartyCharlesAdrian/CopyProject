const mysql = require('mysql');

function getConnection() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "",
        database: "filmandstrips"
    });
    return con;
}

module.exports.getConnection = getConnection;