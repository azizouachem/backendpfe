const route = require('express').Router()
const userController = require('../controllers/usersController')

route.post('/',userController.createUser)
route.get('/',userController.getUser)
route.get('/:id',userController.getUserById)
route.delete('/:id',userController.deleteUser)
module.exports = route ; 