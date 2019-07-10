import * as jwt from 'jsonwebtoken'

const model = require('./model')
const userModel = require('../user/model')

module.exports = {
  newpost: (req: any, res: any) => {
    // @ts-ignore
    let userId = jwt.decode(req.body.auth_token).id

    userModel.findById(userId)
      .then((result: any) => {
        if (!result) {
          return res.send({ success: false, msg: 'No user was found' })
        }

        let newPost = new model({
          userId,
          display_name: result.forename + ' ' + result.surname,
          image: req.body.image,
          desc: req.body.desc
        })

        newPost.save()
          .then((result: any) => {
            res.send({ success: true, result })
          })
          .catch((err: any) => {
            res.send({ success: false, err })
          })
      })
  }
}
