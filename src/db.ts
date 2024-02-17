import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    storage: 'database_test.sqlite',
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log
});
