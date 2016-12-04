"use strict";
var express = require('express');
var backend_server_1 = require('./backend-server');
var port = 5001; //or from a configuration file
var api = new backend_server_1.BackendServer(express(), port);
api.run();
console.info("listening on " + port);
//# sourceMappingURL=index.js.map