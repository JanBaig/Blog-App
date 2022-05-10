import React, { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event){
    event.preventDefault()
    // e.target is the <form></form> content
    const formData = new FormData(event.target);
    
  }


  return (
    <div>

      <h2>Blog App</h2>  
      
      <form onSubmit={handleSubmit}>

        <input type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <br/>
        <input type='text' placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} value={author}/>
        <br/>
        <textarea type='text' placeholder="Blog Content" onChange={(e) => setContent(e.target.value)} value={content}/>
        <br/>
        <input type="submit" value="Submit" />

      </form>
    
    </div>
  );
}

export default App;

// Tasks
// 1. Test sending data to backend (Role of axios/form handling...?)
// 2. Practice getting response from DB
// 3. Eror handling and showing input