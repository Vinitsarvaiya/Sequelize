const {User} = require('../models'); 

const insertdata = async(req,res)=>{
    const {name,email,role} = req.body
    console.log(name)
    try {
        const data = await User.create({name,email,role})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}

const insertbulkdata = async(req,res)=>{
    const data = req.body
    console.log(data)
    try {
        const result = await User.bulkCreate(data)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}

const findall = async(req,res)=>{
    try {
        const data =await User.findAll({include:['posts']})
        res.status(200).json(data)
    } catch (error) {
        res.send('error'+error)
    }
}

const deletedata = async(req,res)=>{
    try {
        const data = await User.findOne({where:{id:req.params.id}})
        console.log(data)
        const ff = await data.destroy()
        console.log(ff)
        res.send('deleted')
    } catch (error) {
        res.send('error')
    }
}

const updatedata = async(req,res)=>{
    const {name,email,role} = req.body
    try {
        const data = await User.findOne({where:{id:req.params.id}})

        data.name = name,
        data.email = email,
        data.role = role

        await data.save()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    insertdata,
    insertbulkdata,
    findall,
    deletedata,
    updatedata
}