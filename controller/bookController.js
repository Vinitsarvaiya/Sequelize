const {auther,book} = require('../models')

const createAandB = async (req,res) => {
    try {
    const Author = await auther.create({ name: 'J.K. Rowling' });
    const Book = await book.create({ title: 'Harry Potter and the Philosopher\'s Stone' });
    await auther.addbook(Book);
    res.send({Author:Author,Book:Book})
    } catch (error) {
        res.send(error)    
    }
};

const findAandB = async(req,res)=>{
    try {
        const data = await auther.findAll({ include: book })
        res.send({data:data})
    } catch (error) {
        res.send(error)
    }
}

module.exports={
    createAandB,
    findAandB
}