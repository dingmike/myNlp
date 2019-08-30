const fs = require("fs");
const path = require("path");
const config = require("../../config");
const mysql = require("./mysql");



// mysql
const newscnnMysql = mysql.createConnection({
    client: 'mysql',
    version: '5.7',
    connection: config.mysql.connection,
});


module.exports = {
    newscnnMysql,

};
