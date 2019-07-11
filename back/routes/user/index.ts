const userRouter = require('express').Router()
const controller = require('./controller')

userRouter.post('/login', controller.login)
userRouter.post('/register', controller.register)
userRouter.post('/getProfile', controller.getProfile)

export { userRouter }
