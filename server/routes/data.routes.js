const express = require("express");
const dataController = require("../controller/data.controller")

function getVitalRoutes(){
    const router = express.Router();

    router.use(express.json());

    router.get("/getDataValues", dataController.getDataValues);

    return router;
}

module.exports = getVitalRoutes();