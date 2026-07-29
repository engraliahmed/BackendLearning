const mysql = require("mysql");
const { root } = require("postcss");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "ali@123",
    database: "airbnb",
});

module.exports = pool.promise();
