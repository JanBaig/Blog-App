
// Model for a Blog
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String, 
  description: {type: String, default: ""},
  author: String, 
  content: String,
  likes: {type: Number, default: 0},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  }

})

// MongoDB object -> JSON object. Use utility method .toJSON()
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('blog', blogSchema) 
