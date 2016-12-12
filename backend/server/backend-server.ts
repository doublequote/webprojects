///<reference path="./typings/index.d.ts"/>
import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");
import apiRouter = require("./routes/apiRouter");
import requestLogger = require("./middleware/requestLogger");

export class BackendServer {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    /**
     * @param app - express application
     */
    private configureMiddleware(app: express.Express) {
        app.use(requestLogger);
        app.use(cors());
    }

    private configureRoutes(app: express.Express) {
        app.use("/api", apiRouter );
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    }

    public run() {
        this.app.listen(this.port);
    }
}
