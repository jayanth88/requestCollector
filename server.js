var express = require('express');
var http = require('http');
console.log('Starting Server...');

var server = http.createServer(function(req,res){
	res.writeHead(200);
	res.end('Hello World');
});

server.listen(8090);
