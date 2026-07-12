const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const birth = db.define("birth", {
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
    mother_id: {
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
    status: {
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
    notes: {
        type: DataTypes.STRING,
        max: 255,
        min: 0,
        allowNull: true
    }
});

module.exports = birth;