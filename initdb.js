var mysql = require('mysql');
var db = require('./js/db.js'); 
db.con.connect(function(err){
  if(!err) {
      console.log("Database is connected ... ");    
  } else {
      console.log("Error connecting database ... ");    
  }
});

var createtable = "CREATE TABLE IF NOT EXISTS info (id int primary key auto_increment," +
                   "ip varchar(255) not null," +
                   "Date DATETIME not null," +
                   "req varchar(255) not null)"

db.con.query(createtable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

function handleError(err) {
  console.log(err);
  db.con.end();;
}

