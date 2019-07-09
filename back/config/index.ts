import process from 'process'

const port = process.env.PORT || 3000
const mongo_uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/instagram'
const secret = process.env.SECRET || 'S4CR4T'

export { port, mongo_uri, secret }
