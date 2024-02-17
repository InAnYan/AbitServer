"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Document = db_1.sequelize.define('Document', {
    title: sequelize_1.DataTypes.STRING,
    source: sequelize_1.DataTypes.BLOB,
});
