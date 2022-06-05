
// The Login Router - endpoint '/api/login'

const loginRouter = require('express').Router()
const userModel = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require('../models/user');
const config = require('../utils/config')

// Send token here
loginRouter.post('/', async (req, res) => {
    const body = req.body;
    const userFound = await userModel.findOne({ username: body.username })

    const correctCredentials = userFound == null ?
    false :
    bcrypt.compareSync(body.password, userFound.passwordHash) // returns boolean

    if (!(userFound && correctCredentials)){
        return res.status(400).json({ error: 'Invalid username or password.' })
    }

    const userForToken = {
        username: userFound.username,
        id: userFound._id
    }

    const token = await jwt.sign(userForToken, config.SECRET)
    console.log('Token: ', token)

    res
    .status(200)
    .send({ token, username: userFound.username, name: userFound.name, avatar: userFound.avatar, blogsID: userFound.blogs })
    

})

module.exports = loginRouter
