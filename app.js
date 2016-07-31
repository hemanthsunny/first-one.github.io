/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');


// start the server
server.listen(3000);

// optional - set socket.io logging level
io.set('log level', 1000);




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, '/')));

// for dev
app.use(express.static(__dirname +  '/'));

// for production, do 'grunt --force' and then comment the line above
// and uncomment the line below

//app.use(express.static(__dirname +  '/public'));


/// error handlers







module.exports = app;
