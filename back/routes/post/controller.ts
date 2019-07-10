import * as jwt from 'jsonwebtoken'

const model = require('./model')
const userModel = require('../user/model')

module.exports = {
  newpost: (req: any, res: any) => {
    // @ts-ignore
    const userId = jwt.decode(req.body.auth_token).id

    userModel.findById(userId)
      .then((result: any) => {
        if (!result) {
          return res.send({ success: false, msg: 'No user was found' })
        }

        let newPost = new model({
          user_id: userId,
          display_name: result.forename + ' ' + result.surname,
          image: req.body.image,
          desc: req.body.desc,
          timestamp: Date.now()
        })

        newPost.save()
          .then((result: any) => {
            console.log(result)
            res.send({ success: true, result })
          })
          .catch((err: any) => {
            res.send({ success: false, err })
          })
      })
  },
  getPosts: (req: any, res: any) => {
    model.find()
      .then((result: any) => {
        console.log(result)
        result = result.sort((a: any, b: any) => {
          return b.timestamp - a.timestamp
        })
        res.send(result)
      })
  }
}
