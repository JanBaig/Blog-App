const mongoose = require('mongoose')
const url = `mongodb+srv://janatB:1181MongoDBjan!@cluster0.rqtkb.mongodb.net/blogEntries?retryWrites=true&w=majority`

mongoose.connect(url)
.then(result => {
    console.log('Connected to MongoDB....')
})
.catch((error) => {
    console.log('Error connecting to MongoDB: ', error.message)
})

const blogSchema = new mongoose.Schema({
    "title": String,
    "author": String,
    "blog_content": String
})

module.exports = mongoose.model('blog', blogSchema) 