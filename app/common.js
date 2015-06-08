// Keep common functions
var MESSAGES_FILE_NAME = 'messages.txt';
var NAMES_FILE_NAME = 'names.txt';
var fs = require('fs');
module.exports = {
	updateMessages: function(callback) {
		fs.readFile(MESSAGES_FILE_NAME, 'utf8', function(err, data) {
			var messages;
			if (!err) {
				messages = data.split('\n');
				messages = messages.filter(function(element) { 
					return element.length > 0;
				}); 
				console.log('[messagelist] Updated messagelist to: ' + messages.length + ' messages.');
				if (typeof callback === 'function') {
					callback(messages);
				}
			} else {
				console.log(err);
			}
		});
	},
	updateNames: function(callback) {
		fs.readFile(NAMES_FILE_NAME, 'utf8', function(err, data) {
			var names;
			if (!err) {
				names = data.split('\n');
				names = names.filter(function(element) { 
					return element.length > 0;
				}); 
				console.log('[namelist] Updated namelist to: ' + names.length + ' names.');
				if (typeof callback === 'function') {
					callback(names);
				}
			} else {
				console.log(err);
			}
		});
	}
};
