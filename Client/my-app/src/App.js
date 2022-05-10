import React, { useState } from "react";
import axios from "axios";
import './styles.css'

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [blogArray, setBlogArray] = useState([]);
  const baseURL = 'http://localhost:3001/api'

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

  function displayBlogs(){

    let displayInfo = blogArray.map((blogItem, count) => {
      
      return (
        <div key={count}>
          <p>{blogItem.title}</p>
        </div>
      )
          
    })

    return (
      <div>
        {displayInfo}
      </div>
    )
  }

  return (
    <div className="mainBody">

      <h2 className="mainTitle">Blog App</h2>  
      
      <form onSubmit={handleSubmit}>

        <input name="title" type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <br/>
        <input name="author" type='text' placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} value={author}/>
        <br/>
        <textarea name="blog_content" type='text' placeholder="Blog Content" onChange={(e) => setContent(e.target.value)} value={content}/>
        <br/>
        <input type="submit" value="Submit" />

      </form>

      {displayBlogs()}
    
    </div>
  );
}

export default App;

// Tasks
// 1. Test sending data to backend (Role of axios/form handling...?)
// 2. Save the request data to the DB
// 3. Eror handling and showing input