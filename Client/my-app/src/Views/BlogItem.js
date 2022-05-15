import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/styles.css'


function BlogItem({ blogData, blogArray, setBlogArray }){
    const baseURL = 'http://localhost:3001/api'
    const [btnVisable, setBtnVisable] = useState(false);
    let navigate = useNavigate();
    
    function deleteBlog(){
        axios.delete(`${baseURL}/${blogData._id}`)
        .then((res) => {
            const filteredBlogs = blogArray.filter((blog) => blog.title !== blogData.title)
            setBlogArray(filteredBlogs)
        })
    }

    function editBlog(){

        navigate("/createNew")

    }

    return (

        <div className="blogItem">

            <p>{'Title: ' + blogData.title}</p>
            <p>{'Author: ' + blogData.author}</p>
            <p>{'Content: ' + blogData.blog_content}</p>

            <button onClick={deleteBlog}>Delete</button>
            <button onClick={editBlog}>Edit</button>
            
        </div>
    )
}

export default BlogItem