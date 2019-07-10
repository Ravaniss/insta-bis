import * as jwt from 'jsonwebtoken'

import { secret } from '../../config'
const model = require('./model')

module.exports = {
  login: (req: any, res: any) => {
    model.findOne({ email: req.body.email }, async (err: any, user: any) => {
      if (err)
        return res.status(500).send({ auth: false, msg: err })

      if (!user)
        return res.send({ auth: false, msg: 'Email or Password did not match'})

      const isMatch = await user.comparePassword(user.password, req.body.password)

      if (!isMatch)
        return res.send({ auth: false, msg: 'Email or Password did not match'})

      const token = jwt.sign({ id: user._id }, secret, { expiresIn: 86400 })
      res.status(200).send({ auth: true, token})
    })
  },
  register: (req: any, res: any) => {
    const newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    })

    newUser.save()
      .then((result: any) => {
        const token = jwt.sign({ id: result._id }, secret, { expiresIn: 86400 })
        res.status(200).send({ auth: true, token})
      })
      .catch((e: any) => {
        if (e.code === 11000)
          return res.send({ auth: false, msg: 'Email already exists...' })

        res.send({ auth: false, msg: 'An internal server error has occurred' })
      })
  }
}
