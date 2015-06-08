var request = require('supertest');
var express = require('express');

var app;

describe('Random commit generator', function() {
	before(function(done) {
		var index = require('./index.js');
		index.init(function(returnedApp) {
			app = returnedApp;
			console.log('init complete.');
			done();
		});
	});
	it('Responds with plain text', function(done) {
		request(app)
		.get('/')
		.set('Accept', 'text/plain')
		.expect('Content-Type', /plain/)
		.expect(200, done);
	});
	it('Has a length of over 1 character', function(done) {
		request(app)
		.get('/')
		.set('Accept', 'text/plain')
		.expect(function(res) {
			return res.length > 0;
		})
		.expect(200, done);
	});
});
