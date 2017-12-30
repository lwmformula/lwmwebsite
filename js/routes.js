var express = require('express');
var app = require('express').Router();
var pathlib = require("path");
var model = require('./model.js'); 

var db = require('./db.js'); 
db.con.connect(function(err){
  if(!err) {
      console.log("Database is connected ... ");    
  } else {
      console.log("Error connecting database ... ");    
  }
});

module.exports=app;

app.get('/file/*', function(req,res) {
  var path = req.url.split('/');
  path = path[path.length-1];
  ext = path.split('.');
  ext = ext[ext.length-1];
  if (ext == 'jpg') {
    res.sendFile(pathlib.join(__dirname, '../img/', path));
  }
  else if (ext == 'pdf'){
    model.ins(req,path);
    res.sendFile(pathlib.join(__dirname, '../project/', path));
  }
  else if (ext == 'css') {
    res.sendFile(pathlib.join(__dirname, '../css/', path));
  }
});

app.get('/git/*', function(req,res) {
  var path = req.url.split('/');
  path = path[path.length-1];
  model.ins(req,path);
  res.redirect("https://github.com/lwmformula/" + path);
});

