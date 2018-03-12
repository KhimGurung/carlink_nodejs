const express = require('express');

const app = express();

const path = require('path');

exports.home = function(req, res){
	res.render(path.join(__dirname, '/../view/index'));
}

exports.register_user = function(req, res){
	res.render(path.join(__dirname, '/../view/register'));
}
exports.login = function(req, res){
	res.render(path.join(__dirname, '/../view/login'));
}
exports.offer_seats = function(req, res){
	res.render(path.join(__dirname, '/../view/trip_register_form'));
}