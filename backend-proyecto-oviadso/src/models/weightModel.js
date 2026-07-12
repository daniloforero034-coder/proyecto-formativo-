const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const weight = db.define("weight", {
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
    weight: {
        type: DataTypes.DECIMAL,
        max: 10,
        min: 0,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        max: 255,
        min: 0,
        allowNull: true
    }
});

module.exports = weight;