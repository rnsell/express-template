"use strict";
const Router = require("express").Router;

// Dependency indject here
const routeSetup = ({msg}) => {
    const router = new Router();

    /**
     * @swagger
     * /health:
     *   get:
     *     tags: ['Health']
     *     description: Returns json verifying server status.
     *     produces:
     *     - application/json
     *     responses:
     *       200:
     *         description: Server is healthy.
     *       404:
     *         description: Server is down.
     */
    router.get("/", (req, res)=>{
        res.json({status: msg});
    });
    return router;
};

module.exports = routeSetup;
