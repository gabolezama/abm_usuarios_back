import {Sequelize} from 'sequelize';
import setupModels from '../db/models/index.js';
import 'dotenv/config.js'

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${process.env.DB_NAME}`;

const sequelize = new Sequelize( URI,{ 
    dialect: 'postgres',
    logging: true
});

setupModels(sequelize);

sequelize.sync();

export default sequelize;