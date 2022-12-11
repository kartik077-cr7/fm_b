const express = require('express')
require('./db/mongoose')
const cors = require("cors")
const userRouter = require('./routers/user')
const enrollRouter = require('./routers/enroll')

const corsOptions = {
	origin:"*",
}

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(enrollRouter)
app.use(cors());

const User = require('./models/users')

module.exports = app