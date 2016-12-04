"use strict";
var apiRouter = require("./routes/apiRouter");
var requestLogger = require("./middleware/requestLogger");
var BackendServer = (function () {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    function BackendServer(app, port) {
        this.app = app;
        this.port = port;
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }
    /**
     * @param app - express application
     */
    BackendServer.prototype.configureMiddleware = function (app) {
        app.use(requestLogger);
    };
    BackendServer.prototype.configureRoutes = function (app) {
        app.use("/api", apiRouter);
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    };
    BackendServer.prototype.run = function () {
        this.app.listen(this.port);
    };
    return BackendServer;
}());
exports.BackendServer = BackendServer;
//# sourceMappingURL=backend-server.js.map