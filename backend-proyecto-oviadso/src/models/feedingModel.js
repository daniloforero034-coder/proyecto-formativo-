const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const feeding = db.define("feeding", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    livestock_id: {
        type: DataTypes.INTEGER,
        max: 10,
        min: 0,
        allowNull: false
    },
    food_type: {
        type: DataTypes.STRING,
        max: 255,
        min: 3,
        allowNull: false
    },
    quantity: {
        type: DataTypes.DECIMAL,
        max: 10,
        min: 0,
        allowNull: false
    },
    postJob: {
        type: DataTypes.STRING,
        max: 30,
        min: 3,
        allowNull: false
    },
    activete: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    notes: {
        type: DataTypes.STRING,
        max: 255,
        min: 0,
        allowNull: true
    }
});

module.exports = feeding;