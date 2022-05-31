
// Model for a Blog
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  background: String,
  title: String, 
  category: String, 
  description: {type: String, default: ""},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  likes: {type: Number, default: 0},
  content: String,
  date: String

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
