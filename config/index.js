"use strict";
const databaseConf = require("./files/database.json");
const appConf = require("./files/app.json");

// DOCUMENT THIS IN README
const { PG_DATABASE, PG_HOST, PG_PORT,  PG_USER, PG_PASSWORD } = process.env;
const { APP_NAME, APP_PORT, APP_LOG_LEVEL } = process.env;
const { database: databaseName, host, port, user, password } = databaseConf;
const { appPort, appName, appLogLevel } = appConf;


const database = {
    user: PG_USER || user || "postgres",
    password: PG_PASSWORD ||  password || "",
    database:  PG_DATABASE || databaseName || "public",
    host:  PG_HOST || host || "localhost",
    port:  PG_PORT || port ||  5432
};

const app = {
    name: APP_NAME || appName || 'THI API',
    port: APP_PORT || appPort || 3000,
    logLeve: APP_LOG_LEVEL || appLogLevel || 'info',
};

module.exports = {
    database,
    app,
};
