///<reference path="./typings/index.d.ts"/>
import express = require("express");
import pageRouter = require("./routes/pageRouter");
import requestLogger = require("./middleware/requestLogger");
import nunjucks = require('nunjucks');

export class FrontendServer {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
        nunjucks.configure('templates', { autoescape: true, express: app, watch: true });
        this.app.use(express.static('resources'));
    }

    /**
     * @param app - express application
     */
    private configureMiddleware(app: express.Express) {
        app.use(requestLogger);
    }

    private configureRoutes(app: express.Express) {
        app.use("/", pageRouter );
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    }

    public run() {
        this.app.listen(this.port);
    }
}
