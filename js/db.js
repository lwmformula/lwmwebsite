var mysql = require('mysql');

var connection = mysql.createConnection({
	host : "*SECRET*"
	port : "*SECRET*"
	user : "*SECRET*"
	password: "*SECRET*"
	database: "*SECRET*"
});

module.exports = {con: connection};
