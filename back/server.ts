import express = require('express')
import mongoose = require('mongoose')

import { port, mongo_uri } from './config'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'

const cors = require('cors')

mongoose.connect(mongo_uri, { useNewUrlParser: true })
  .then(() => {
    const app: any = express()

    app.use(express.urlencoded({ limit: '50mb', extended: true}))
    app.use(express.json({ limit: '50mb' }))
    app.use(cors())

    app.use('/user', userRouter)
    app.use('/post', postRouter)

    app.listen(port, console.log(`Server has started on http://localhost:${port}`))
  }).catch(err => console.error(`An error has occured ${err}`))
