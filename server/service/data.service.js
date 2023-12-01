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
            const dataValuesList = dataValues.map((data, index) => {
                const off = data.datetime.getTimezoneOffset() * 60000;
                var newdt = new Date(data.datetime - off).toISOString();
                const dateAndTime = newdt.split('T');
                const datePart = dateAndTime[0];
                const timePart = dateAndTime[1].substring(0, 8);

                return {
                    id: data.id,
                    temperature: data.temperature,
                    humidity: data.humidity,
                    date: datePart,
                    time: timePart
                }
            });

            return {
                error: false,
                status: 200,
                payload: dataValuesList
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