import Sequelize from 'sequelize';
import {config} from '../../config.js';
const env = config.Develomenp 
export const sequelize = new Sequelize(env.database, env.username, env.password, env)
/*export const sequelize = new Sequelize(
    'sequelize',
    "jparedes",
    "papita123@", {
        host:"127.0.0.1",
        dialect :"mysql"
    }
);*/

