
// The User Router - endpoint '/api/user'

const userRouter = require('express').Router()
const userModel = require('../models/user')
const bcrypt = require("bcrypt");

userRouter.get('/', async (req, res) => {
  const allUsers = await userModel.find({}).populate('blogs', { title: 1 })
  res.json(allUsers)

})

userRouter.get('/:id', async (req, res) => {
  const ID = req.params.id;
  const foundUser = await userModel.findById(ID)
  res.status(200).json(foundUser)

})

userRouter.post('/', async (req, res) => {
  const body = req.body;

  // Raise error on duplicated username
  const duplicate = await userModel.findOne({ username: body.username })
  if (duplicate != null ){
    return res.status(400).json({ error: 'Duplicate username. Please try again.' })
  }

  if (body.username.indexOf(' ') >= 0){
    return res.status(400).json({ error: 'Username cannot include spaces. Try again.' })
  }

  // Hashing the password
  const passwordHash = bcrypt.hashSync(body.password, 8);

  const newUser = new userModel({
    avatar: body.avatar,
    username: body.username,
    name: body.name,
    passwordHash: passwordHash
    
  })

  const savedUser = await newUser.save();
  res.status(200).json(savedUser);

})

module.exports = userRouter;