import React, { useEffect, useState } from "react";
import axios from "axios";
import './Styles/styles.css'
import BlogItem from './Components/BlogItem'

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [blogArray, setBlogArray] = useState([]);
  const baseURL = 'http://localhost:3001/api'

  function loadDefault(){
    axios.get(baseURL)
    .then(res => {
      // Returns all blogs stored in the database
      res.data.map(blogItem => {
        setBlogArray(blogArray => blogArray.concat(blogItem))
      })
    })
  }

  useEffect(loadDefault, [])

  function displayBlogs(){

    let displayInfo = blogArray.map((blogItem, count) => {
      
      return (
        <div key={count}>
          <BlogItem blogData={blogItem}/>
          
        </div>
      )
          
    })

    return(
      <div>
        {displayInfo}
      </div>
    )
      
  }

  function handleSubmit(event){
    event.preventDefault()
    // e.target is the <form></form> content
    const formData = new FormData(event.target);
    const value = Object.fromEntries(formData.entries());

    axios.post(baseURL, value)
    .then(res => {
      console.log('Successfully saved to the DB') // 'Blog successfully saved!'
      console.log(res.data)
      setBlogArray((blogArray) => (blogArray.concat(res.data)))
      console.log(blogArray)

      setTitle("")
      setAuthor("")
      setContent("")
    })
    
  }

  return (
    <div>

      <h1 className="mainTitle" >Blog App</h1>  
      
      <div className="editBlog">

        <form onSubmit={handleSubmit}>
          
          <h3>Create New Blog</h3>

          <input name="title" type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
          <br/>
          <input name="author" type='text' placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} value={author}/>
          <br/>
          <textarea name="blog_content" type='text' placeholder="Blog Content" onChange={(e) => setContent(e.target.value)} value={content}/>
          <br/>
          <br />
          <input type="submit" value="Submit" />

        </form>

      </div>

      <div className="displayBlog">
        <h3>Your Blogs</h3>
        {displayBlogs()}

      </div>
      
    </div>
  );
}

export default App;

// Goals
// Seperate 'Create Blog' with Blog Display Lists
// Display each blog in a div (With borders) and line them up on top of each other to the right
// Load initial data from the DB into the blogsArary to render at first
// Add options to edit and remove existing blogs (All re-rendered correctly)