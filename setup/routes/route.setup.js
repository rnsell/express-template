"use strict";

const healthRoute = require("../../routes/health");
const docsRoute = require("../../routes/docs/routes");

const setup = ({app})=> {
    app.use("/health", healthRoute({msg: 'healthy'}));
    app.use("/docs", docsRoute);
};

module.exports = setup;
