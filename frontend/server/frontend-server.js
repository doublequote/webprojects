"use strict";
var express = require("express");
var pageRouter = require("./routes/pageRouter");
var requestLogger = require("./middleware/requestLogger");
var nunjucks = require("nunjucks");
var FrontendServer = (function () {
    function FrontendServer(app, port) {
        this.app = app;
        this.port = port;
        this.configureMiddleware(app);
        this.configureRoutes(app);
        nunjucks.configure('templates', { autoescape: true, express: app, watch: true });
        this.app.use(express.static('../resources'));
    }
    FrontendServer.prototype.configureMiddleware = function (app) {
        app.use(requestLogger);
    };
    FrontendServer.prototype.configureRoutes = function (app) {
        app.use("/", pageRouter);
    };
    FrontendServer.prototype.run = function () {
        this.app.listen(this.port);
    };
    return FrontendServer;
}());
exports.FrontendServer = FrontendServer;
//# sourceMappingURL=frontend-server.js.map