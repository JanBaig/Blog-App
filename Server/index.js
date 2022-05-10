
// Node Server
const express = require('express')
const app = express()
const port = 3001
app.use(express.json());
const cors = require('cors');
app.use(cors())
const blogData = require('./Database/blog.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res, next) => {
    res.send('Here is some API information!')
})

app.post('/api', (req, res) => {
    // Data is going to come from request body
    const data = req.body

    const newBlog = new blogData({
        "title": data.title,
        "author": data.author,
        "blog_content": data.blog_content
    })

    newBlog.save()
    .then(() => {
        // Display this to the user
        res.send('Blog successfully saved to the DB!')
    })
    .catch((error) => next(error))

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})
