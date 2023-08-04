const http = require('http');
const express = require('express');

const host = 'localhost';
const port = 8888;

var locationName;

function onRequest(request, response){
	response.write("Welcome to RoulEats!");
	response.end();
	randomize();
}

http.createServer(onRequest).listen(port);
console.log(`Server is now listening on http://${host}:${port}`);

function randomize(){
	'use strict';
	const fileSync = require('fs');
	fileSync.readFile('./LocationList.json', (error, rawdata) => {
		if (error) throw error;
		var rawString = JSON.stringify(rawdata);
		console.log(rawString['Name']);
		return rawString['Name'];
	});
}