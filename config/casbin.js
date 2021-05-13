require('dotenv').config()
const casbin = require('casbin');
const { SequelizeAdapter } = require('casbin-sequelize-adapter');


exports.enforcer = async () => {
    let enforcer
    try {
        const a = await SequelizeAdapter.newAdapter({
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
        });
        enforcer = await casbin.newEnforcer('basic_model.conf', a);
        return enforcer;
    } catch (error) {
        console.log(error);
    }
}