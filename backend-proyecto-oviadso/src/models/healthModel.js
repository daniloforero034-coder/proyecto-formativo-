const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const health = db.define("health", {
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
    diagnosis: {
        type: DataTypes.STRING,
        max: 255,
        min: 3,
        allowNull: false
    },
    treatment: {
        type: DataTypes.STRING,
        max: 255,
        min: 3,
        allowNull: true
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
    observations: {
        type: DataTypes.STRING,
        max: 255,
        min: 0,
        allowNull: true
    }
});

module.exports = health;