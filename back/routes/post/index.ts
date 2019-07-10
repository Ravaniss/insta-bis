const postRouter = require('express').Router()
const controller = require('./controller')

postRouter.post('/newpost', controller.newpost)
postRouter.get('/getposts', controller.getPosts)

export { postRouter }
