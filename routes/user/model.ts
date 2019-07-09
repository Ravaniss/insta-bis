import mongoose = require('mongoose')
import { Password } from '../../scripts/Hash'

const user = new mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  account_created: {
    type: String,
    default: Date.now()
  }
})

user.pre('save', async function (next) {
  let user: any = this
  if (!user.isModified('password')) return next()

  user.password = await Password.hash(user.password)
})

user.methods.comparePassword = (hash: any, password: string) => {
  return Password.compare(hash, password)
}

const model = mongoose.model('user', user)

module.exports = model
