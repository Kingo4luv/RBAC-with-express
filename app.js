require('dotenv').config()
const express = require('express')
const { SequelizeAdapter } = require('casbin-sequelize-adapter');
const { Sequelize } = require('sequelize');
const cookieSession = require("cookie-session");
const Routes = require('./routes/index')
const app = express()
const port = 3000


app.use(express.json());
app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);

app.use("/", Routes);


app.get('/', async (req, res) => {
  if (!await enforcer.enforce('king', 'data1', 'read')){
     return res.status(401).send("You are not authorized");
  }

  const policies = await enforcer.getPolicy();
  res.send(policies);

})

app.post('/add', async(req, res) => {
    const {subject, object, action} = req.body;
    const savings = await enforcer.addPolicy(subject, object, action);
    res.send("Policy Added")
})


async function bootstrap() {
    const sequelize = await new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

bootstrap().then(() => {
    console.log('Now you can open http://localhost:3000');
});

