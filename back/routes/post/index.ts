const postRouter = require('express').Router()
const controller = require('./controller')

postRouter.post('/newpost', controller.newpost)

export { postRouter }
