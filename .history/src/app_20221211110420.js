const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const enrollRouter = require('./routers/enroll')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(enrollRouter)

const User = require('./models/users')

module.exports = app