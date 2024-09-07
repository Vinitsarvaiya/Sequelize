const { sequelize, User, post } = require('./models'); 
const express = require('express')
const app = express()
const web = require('./router/web')
app.use(express.json())
app.use(web)



app.listen(7000,async()=>{
    console.log('server is running')
    // sequelize.sync({ force: true })
    // .then(() => console.log('Database & tables created!'))
    // .catch(err => console.error('Error syncing database:', err));
    await sequelize.authenticate()
    console.log('database connected')
})