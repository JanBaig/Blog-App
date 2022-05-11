import axios from "axios";
import React, {useState} from "react";
import '../Styles/styles.css'
import BlogForm from "./BlogForm";


function BlogItem({ blogData }){
    const baseURL = 'http://localhost:3001/api'
    const [btnVisable, setBtnVisable] = useState(false);
    
    function deleteBlog(){
        axios.delete(`${baseURL}/${blogData._id}`).then((res) => {
            console.log(res.data)
        })

    }

    function editBlog(){
        
        alert('Updated')
        setBtnVisable(false)
        
    }

    return (

        <div className="blogItem">

            <p>{'Title: ' + blogData.title}</p>
            <p>{'Author: ' + blogData.author}</p>
            <p>{'Content: ' + blogData.blog_content}</p>
            <button onClick={deleteBlog}>Delete</button>
            <button onClick={() => setBtnVisable(true)}>Edit</button>
            {btnVisable ? <button onClick={editBlog}>Submit</button>: <p>Not visable</p> }
            
        </div>
    )
}

export default BlogItem