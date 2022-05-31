
// The Request Listener

const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const userModel = require('./models/user')
const blogSchema = require('./models/blog')
const blogRouter = require('./controllers/blog')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')

// Middleware
app.use(cors())
app.use(express.json())
app.use('/api/blog', blogRouter)
app.use('/api/user', userRouter)
app.use('/api/login', loginRouter)
module.exports = app;