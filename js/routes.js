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
    return res.sendFile(pathlib.join(__dirname, '../img/', path));
  }
  else if (ext == 'pdf'){
    model.ins(req,path);
    return res.sendFile(pathlib.join(__dirname, '../project/', path));
  }
  else if (ext == 'css') {
    return res.sendFile(pathlib.join(__dirname, '../css/', path));
  }
});

app.get('/ecom', function(req,res) {
  model.ins(req,'EcomDemo');
  return res.redirect("http://35.161.32.39");
});

app.get('/git/*', function(req,res) {
  let path = req.url.split('/');
  let parent = path[path.length-2];
  path = path[path.length-1];
  ext = path.split('.');
  ext = ext[ext.length-1];

  if (ext == 'py') {
    model.ins(req,path);
    res.redirect("https://github.com/lwmformula/" + parent + '/blob/master/' + path);
  }
  else if (ext == 'git'){
    model.ins(req,path);
    res.redirect("https://github.com/lwmformula/" + path);
  }
});

