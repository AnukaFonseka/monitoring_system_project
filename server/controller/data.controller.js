const dataService = require("../service/data.service");

//Get All Data Values
async function getDataValues(req, res) {
    try {
        const result = await dataService.getDataValues();

        if (result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(200).json ({
                error: false,
                payload: result.payload
        })}

    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error.message
        })
    }
}

module.exports = {
    getDataValues
}