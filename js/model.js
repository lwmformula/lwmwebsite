var moment = require('moment-timezone');
var db = require('./db.js');

function getip(req){
  var gloip = req.headers['x-forwarded-for'] || 
       req.connection.remoteAddress || 
       req.socket.remoteAddress ||
       (req.connection.socket ? req.connection.socket.remoteAddress : null);
  return gloip;
}

function ins(req,path) {
  let qry = "INSERT INTO info(ip, Date, req) VALUES ?";
  let ip = getip(req);
  let current = moment.tz(moment(), 'Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss');
  let values = [[ip,current,path]];
  db.con.query(qry, [values], function(err,result) {
    if (err) throw err;
    console.log("Inserted!");
  });
}

module.exports = {ins:ins};