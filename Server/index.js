
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

app.get('/api/:id', (req, res) => {
  // the id is the _id
  const ID = req.params.id;
  blogData.findById(ID).then((foundBlog) => {
    res.json(foundBlog)
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

//replaces the entire identified resource with the request data
app.put('/api/:id', (req, res) => {

  const body = req.body
  const ID = req.params.id
  
  // Finding based on the Title (Blog posts CANNOT have the SAME title)
  blogData.findOneAndUpdate(
    {"_id": ID}, 
    {
      "title": body.title,
      "author": body.author,
      "blog_content": body.blog_content}
  )
  .then(replaced => {
    res.json(replaced)
  })
  

})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}...`)

})
