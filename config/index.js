"use strict";
const databaseConf = require("./files/database.json");
const expressConf = require("./files/express.json");

// DOCUMENT THIS IN README
const {PG_DATABASE, PG_HOST, PG_PORT,  PG_USER, PG_PASSWORD} = process.env;
const {EXPRESS_PORT} = process.env;
const { database: databaseName, host, port, user, password } = databaseConf;
const { expressport } = expressConf;


const database = {
    user: PG_USER || user || "postgres",
    password: PG_PASSWORD ||  password || "",
    database:  PG_DATABASE || databaseName || "public",
    host:  PG_HOST || host || "localhost",
    port:  PG_PORT || port ||  5432
};
const express = {
    port: EXPRESS_PORT || expressport || 3000
};


module.exports = {
    database,
    express
};