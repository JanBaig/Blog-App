import React, { useState } from "react";


function BlogForm({ blogData }){
  const [title, setTitle] = useState(blogData.title);
  const [author, setAuthor] = useState(blogData.author);
  const [content, setContent] = useState(blogData.blog_content);

  return (
    <div>

        <form>
          
          <h3>Create New Blog</h3>

          <input name="title" type='text' placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
          <br/>
          <input name="author" type='text' placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} value={author}/>
          <br/>
          <textarea name="blog_content" type='text' placeholder="Blog Content" onChange={(e) => setContent(e.target.value)} value={content}/>
          <br/>
          <br />
          {/* <input type="submit" value="Submit" /> */}

        </form>

      </div>
  )
}

export default BlogForm