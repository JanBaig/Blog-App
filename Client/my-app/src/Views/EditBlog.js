import {React, useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = 'http://localhost:3001/api'

export default function EditBlog(){
    const params = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState("")
    let navigate = useNavigate();

    // change the initial states 
    function loadDefault() {
        axios.get(`${baseURL}/${params.id}`).then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setAuthor(res.data.author)
            setContent(res.data.blog_content)
            setId(res.data._id)
        })
    }

    useEffect(loadDefault, [])

    function handleSubmit(event){
        event.preventDefault()
        // e.target is the <form></form> content
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());

        // AFTER THE SUBMIT WE SHOULD NAVIGATE BACK TO THE RETURN PAGE!
        const updated = {
            "title": title,
            "author": author,
            "blog_content": content
        }

        axios.put(`${baseURL}/${id}`, updated).then(updated => {
            console.log(updated)
            navigate("/displayAll")
            
        })
        
        
    }

    return (
        <main>
            <div className="editBlog">
                <form onSubmit={handleSubmit}>
                    <h3>Edit Blog</h3>
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