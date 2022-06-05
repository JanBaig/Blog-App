
// The Blog Router - endpoint '/api/blog'

const blogRouter = require('express').Router()
const blogModel = require('../models/blog')
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

blogRouter.get('/', async (req, res) => {
  const allBlogs = await blogModel.find({}).populate('user', {username: 1, name: 1, avatar: 1})
  res.json(allBlogs)

})

blogRouter.get('/:id', (req, res) => {
  const ID = req.params.id;
  blogModel.findById(ID)
  .then((foundBlog) =>{
    res.status(200).json(foundBlog)
  })
  .catch((error) => {
    res.status(400).json({ error: error.message })
  })
  
})

// Verify the token and then proceed
blogRouter.post('/', async (req, res) => {
  const body = req.body

  // Verifying Token
  let token = '';
  const authorization = req.get('authorization')

  if (authorization == undefined){
    return res.status(400).json({ error: 'Invalid token.' })
  }

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7) // excludes the 'bearer' part with the substring
  }
  const decodedToken = jwt.verify(token, config.SECRET)
  
  // Getting user from Token
  const user = await userModel.findById(decodedToken.id)

  // Creating New Blog
  const newBlog = new blogModel({
    background: body.background,
    title: body.title,
    category: body.category,
    description: body.description,
    user: user._id,
    likes: body.likes,
    content: body.content,
    date: body.date
    
  })

  const savedBlog = await newBlog.save()

  // Updating the user's 'blogs' array
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  res.status(200).json(savedBlog)

})

blogRouter.delete('/:id', async (req, res) => {
  const ID = req.params.id

  const deletedBlog = await blogModel.deleteOne({ _id: ID  })
  res.status(200).json({ message: 'Successfully Deleted!' })
  
})

blogRouter.put('/:id', async (req, res) => {
  const ID = req.params.id;
  const body = req.body;
  console.log(body)
  const response = await blogModel.findByIdAndUpdate(ID, body, { new: true })
  
  res.status(200).json(response)

})

module.exports = blogRouter;

