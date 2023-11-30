const express = require("express");
const userRoutes = require("./user.routes");
const dataRoutes = require("./data.routes");

function routes() {

    const router = express.Router();

    router.use("/user", userRoutes);
    router.use("/dataValues", dataRoutes);


    
    return router;
}

module.exports = routes();