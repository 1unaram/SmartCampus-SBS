const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '13.125.213.93',
    user: 'ram',
    password: '0620',
    database: 'sbs',
});

module.exports = connection;