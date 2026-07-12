const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const ovine = db.define("ovine", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    weight: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "ovine",
    freezeTableName: true,
    timestamps: false
});


module.exports = ovine;  