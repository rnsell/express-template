"use strict";
const Router = require("express").Router;

// Dependency indject here
const routeSetup = ({msg}) => {
    const router = new Router();

    router.get("/", (req, res)=>{
        res.json({status: msg});
    });
    return router;
};

module.exports = routeSetup;