import Sequelize from 'sequelize';
import {config} from '../../config.js';
const env = config.Develomenp 
export const sequelize = new Sequelize(config.databases, env.username, env.password, env)


