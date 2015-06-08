// Handles routes for the application.
var express = require('express');
var app = express();
var router = module.exports = express.Router();
var pg = require('pg');
var npm = require('npm');

// Middleware to set up the response the way we want.
router.use(function(req, res, next) {
	// Set the application to respond with the plain text Content-Type.
	res.set('Content-Type', 'text/plain');
	next();
});

// Send the commit message we generate.
router.route('/').get(function(req, res) {
	var message = messageList[parseInt(Math.random() * messageList.length)];
	var name = nameList[parseInt(Math.random() * nameList.length)];
	// Attempt to replace the name placeholders.
	message = message.replace('XNAMEX', name);
	message = message.replace('XUPPERNAMEX', name.toUpperCase());
	res.send(message);
});
