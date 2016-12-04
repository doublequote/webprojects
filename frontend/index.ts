import express = require('express');
import { FrontendServer } from './frontend-server';

let port = 5000; //or from a configuration file
let api = new FrontendServer(express(), port);
api.run();
console.info(`listening on ${port}`);
