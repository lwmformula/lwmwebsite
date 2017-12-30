let express = require('express');
let session = require('express-session');
let app = express();
var requestIp = require('request-ip');
var model = require('./js/model.js'); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/favicon.ico', function(req, res) {
	res.status(204);
});

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

app.use(require('./js/routes.js'));

app.use('/', function(req,res) {
	model.ins(req,'/');
	return res.render('index.ejs');
});

app.listen(8081);

