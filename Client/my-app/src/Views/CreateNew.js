import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = 'http://localhost:3001/api'

export default function CreateNew(){

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    let navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        // e.target is the <form></form> content
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());
    
        axios.post(baseURL, value)
        .then(res => {
          console.log('Successfully saved to the DB') // 'Blog successfully saved!'
          console.log(res.data)
    
          setTitle("")
          setAuthor("")
          setContent("")
          navigate("/")
        })
        
      }

    return (
        <main>
            <button onClick={() => navigate("/")}>Home</button>
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
        </main>
    )
}