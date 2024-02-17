"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Person = db_1.sequelize.define('Person', {
    firstName: sequelize_1.DataTypes.STRING,
    lastName: sequelize_1.DataTypes.STRING,
    fatherName: sequelize_1.DataTypes.STRING,
    birthday: sequelize_1.DataTypes.DATEONLY,
    sex: sequelize_1.DataTypes.BOOLEAN,
});
