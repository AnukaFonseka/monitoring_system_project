module.exports = (sequelize, DataTypes) => {
    const data_values = sequelize.define("data_values", {
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        humidity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    
    }, {
        timestamps: false
    });
    return data_values;
};