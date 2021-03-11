const express = require('express');
const server = express();
const cors = require('cors');
const { TechonologyRoutes } = require('../routes');

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.use('/', TechonologyRoutes);

module.exports = server;