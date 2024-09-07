const express = require('express')
const userController = require('../controller/userController')
const postController = require('../controller/postController')
const empController = require('../controller/empController')
const bookController = require('../controller/bookController')
const router = express.Router();

router.post('/user',userController.insertdata)
router.post('/userbulk',userController.insertbulkdata)
router.get('/user',userController.findall)
router.delete('/user/:id',userController.deletedata)
router.put('/user/:id',userController.updatedata)

router.post('/post',postController.inserdata)
router.get('/post',postController.findall)

router.post('/emp',empController.insertdata)
router.get('/emp/scope',empController.fetchScopeAndTranscation)
router.get('/emp',empController.fetchdata)


router.post('/author',bookController.createAandB)
router.get('/author',bookController.findAandB)

module.exports = router