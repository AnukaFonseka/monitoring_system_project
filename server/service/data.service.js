const { data_values } = require("../models");

async function getDataValues() {
    try {
        const dataValues = await data_values.findAll();

        if(!dataValues) {
            return {
                error: true,
                status: 404,
                payload: "No data values found."
            }
        } else {
            return {
                error: false,
                status: 200,
                payload: dataValues
            };
        }

        

    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = {
    getDataValues
}