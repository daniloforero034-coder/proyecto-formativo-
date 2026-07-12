const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Mounting = db.define("mounting", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mounting: {
        type: DataTypes.STRING,
        allowNull: false
    },
    result_mounting: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breeding_male: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
});

module.exports = Mounting;       