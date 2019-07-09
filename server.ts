import express = require('express')
import mongoose = require('mongoose')

import { port, mongo_uri } from './config'
import { router } from './routes/user'

mongoose.connect(mongo_uri, { useNewUrlParser: true })
  .then(() => {
    const app: any = express()

    const cors = (req: any, res: any, next: any) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', '*')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use(cors)

    app.use('/user', router)

    app.listen(port, console.log(`Server has started on http://localhost:${port}`))
  }).catch(err => console.error(`An error has occured ${err}`))





