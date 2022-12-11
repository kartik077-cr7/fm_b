const express = require('express')
require('./db/mongoose')

const userRouter = require('./router/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)

const User = reuire('./models/task')

module.exports = app