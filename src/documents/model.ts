import {DataTypes} from "sequelize";
import {sequelize} from "../db";

export const Document = sequelize.define('Document', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        }
    },

    source: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        }
    },
})
