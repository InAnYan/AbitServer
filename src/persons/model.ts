import {DataTypes} from "sequelize";
import {sequelize} from "../db";

export const Person = sequelize.define('Person', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true,
            notNull: true,
        },
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true,
            notNull: true,
        }
    },

    fatherName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true,
            notNull: true,
        }
    },

    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
            notNull: true,
        }
    },

    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
});
