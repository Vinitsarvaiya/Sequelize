const {post} = require('../models')


const inserdata = async(req,res)=>{
    const {userId,body} = req.body
    try {
        const data = await post.create({userId,body})
        res.status(200).json(data)
    } catch (error) {
        res.send('error')
    }
}

const findall = async(req,res)=>{
    try {
        const data =await post.findAll({ include:[{model:User,as:'user'}]})
        // const data =await post.findAll({include:['user']})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}

module.exports = {
    inserdata,
    findall
}