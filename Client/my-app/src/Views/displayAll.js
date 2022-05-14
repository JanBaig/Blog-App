import { React, useState, useEffect } from "react"
import BlogItem from "./BlogItem"
import axios from "axios";

export default function DisplayAll(){
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
        )}
    )

    return(
        <div>
            {displayInfo}
        </div>)
    }

    return (
        <div className="displayBlog">
            {displayBlogs()}
        </div>
    )

}