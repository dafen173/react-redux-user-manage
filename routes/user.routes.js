/* import Router from 'express'
import userController from '../controller/user.controller' */

const Router = require('express')
const router = new Router
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)


module.exports = router


