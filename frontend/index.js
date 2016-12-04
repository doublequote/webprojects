"use strict";
var express = require('express');
var frontend_server_1 = require('./frontend-server');
var port = 5000; //or from a configuration file
var api = new frontend_server_1.FrontendServer(express(), port);
api.run();
console.info("listening on " + port);
//# sourceMappingURL=index.js.map