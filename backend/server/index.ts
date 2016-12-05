import express = require('express');
import { BackendServer } from './backend-server';

let port = 5001; //or from a configuration file
let api = new BackendServer(express(), port);
api.run();
console.info(`listening on ${port}`);
