const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const app = express()

app.use(express.json())
app.use(userRouter)

const User = reuire('../models/users')

module.exports = app