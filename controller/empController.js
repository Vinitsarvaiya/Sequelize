const {emp,sequelize} = require('../models'); 

const insertdata = async(req,res)=>{
    const {name,email,age,status,dob} = req.body
    // console.log(req.body)
    try {
        const data =await emp.create({name,email,age,status,dob})
        res.status(200).json(data)
        console.log('try')
    } catch (error) {
        console.log('error')
        // console.log(error)
        res.send(error.errors[0].message)
    }
}

const fetchScopeAndTranscation  = async(req,res)=>{
    const t = await sequelize.transaction()
    try {
        const data = await emp.scope(['employeeStatus']).findAll({},{
            transaction:t
        })
        // throw new Error('go back')
        res.send({data:data}) 
        t.commit() 
        console.log('commit')      
    } catch (error) {
        res.send(error.message)
        t.rollback()
        console.log('rollback')
    }
}

const fetchdata = async(req,res)=>{
    try {
        const data = await emp.findAll({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    insertdata,
    fetchScopeAndTranscation,
    fetchdata
}