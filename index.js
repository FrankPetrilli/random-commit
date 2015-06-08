/* Requires */
var express = require('express');
var request = require('request');
var fs = require('fs');
var pg = require('pg');
var npm = require('npm');
var bodyParser = require('body-parser');

/* Grab dependencies */
var common = require('./app/common.js');
var router = require('./app/router.js');

/* Initialization */
var app = express();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

/* Statics */
app.set('port', process.env.PORT || 8080);
var UPDATE_INTERVAL = 60000; // Every minute

/* Global Vars */

/* Begin application definition */

// Serve the static directory for client files.
app.use('/', router);

function updateData() {
	common.updateMessages(function(messages) {
		messageList = messages;
	})
	common.updateNames(function(names) {
		nameList = names;
	})
}

// Begin our application once our dependencies are up.
function init(callback) {
	setInterval(updateData, UPDATE_INTERVAL);
	common.updateMessages(function(messages) {
		messageList = messages;
		common.updateNames(function(names) {
			nameList = names;
			app.listen(app.get('port'), function() {
				console.log('[server] Listening on ' + app.get('port'));
				if (typeof callback === 'function') {
					callback(app);
				}
			});
		});
	});
}
module.exports.init = init;
