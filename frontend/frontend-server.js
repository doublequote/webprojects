"use strict";
///<reference path="./typings/index.d.ts"/>
var express = require("express");
var pageRouter = require("./routes/pageRouter");
var requestLogger = require("./middleware/requestLogger");
var nunjucks = require('nunjucks');
var FrontendServer = (function () {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    function FrontendServer(app, port) {
        this.app = app;
        this.port = port;
        this.configureMiddleware(app);
        this.configureRoutes(app);
        nunjucks.configure('templates', { autoescape: true, express: app, watch: true });
        this.app.use(express.static('resources'));
    }
    /**
     * @param app - express application
     */
    FrontendServer.prototype.configureMiddleware = function (app) {
        app.use(requestLogger);
    };
    FrontendServer.prototype.configureRoutes = function (app) {
        app.use("/", pageRouter);
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    };
    FrontendServer.prototype.run = function () {
        this.app.listen(this.port);
    };
    return FrontendServer;
}());
exports.FrontendServer = FrontendServer;
//# sourceMappingURL=frontend-server.js.map