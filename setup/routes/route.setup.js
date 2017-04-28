"use strict";

const healthRoute = require("../../routes/health");

const setup = ({app})=> {
    const msg = "heathy";
    app.use("/health", healthRoute({msg}));

};

module.exports = setup;