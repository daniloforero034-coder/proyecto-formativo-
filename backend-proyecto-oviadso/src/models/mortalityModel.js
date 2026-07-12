const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const mortality = db.define("mortality", {
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
        max: 30,
        min: 0,
        allowNull: false
    },
    cause: {
        type: DataTypes.STRING,
        max: 30,
        min: 3,
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
    description: {
        type: DataTypes.STRING,
        max: 255,
        min: 0,
        allowNull: true
    }
});

module.exports = mortality;