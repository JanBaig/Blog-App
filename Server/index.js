
// Node Server
const express = require('express')
const app = express()
const port = 3001
app.use(express.json());
const cors = require('cors');
app.use(cors())
const blogData = require('./Database/blog.js');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  res.render('index')

})

// Return all blogs
app.get('/api', (req, res, next) => {

  blogData.find({}).then(allBlogs => {
    res.json(allBlogs)
  })

})

// Add/Return a single new blog
app.post('/api', (req, res) => {

  // Data is going to come from request body
  const data = req.body

  const newBlog = new blogData({
      "title": data.title,
      "author": data.author,
      "blog_content": data.blog_content
  })

  newBlog.save()
  .then((savedBlog) => {
      // Display this to the user
      res.json(savedBlog)
  })
  .catch((error) => next(error))

})

app.delete('/api/:id', (req, res) => {

  // The returned ID is actually _id NOT .id
  const ID = req.params.id
  blogData.deleteOne({ _id: ID }).then(deletedBlog => {
    res.send('Blog was successfully deleted')
  })

})

app.put('/api/:id', (req, res) => {

  const ID = req.params.id
  //Something here 
  

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}...`)

})
