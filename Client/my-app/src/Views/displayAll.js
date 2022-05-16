import { React, useState, useEffect } from "react"
import BlogItem from "./BlogItem"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DisplayAll(){
  const [blogArray, setBlogArray] = useState([]);
  const baseURL = 'http://localhost:3001/api'
  const [filter, setFilter] = useState("")
  let navigate = useNavigate();

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

  function filterData(event){
    setFilter(event.target.value)
    //alert(`Has been filtered.`)
  }

  function displayBlogs(){
    // Only the blogs that match the filter should be rendered
    const filteredBlogs = blogArray.filter(blog => blog.title.includes(filter))

    let displayInfo = filteredBlogs.map((blogItem, count) => {
      return (
        <div key={count}>
          <BlogItem blogData={blogItem} blogArray={blogArray} setBlogArray={setBlogArray}/>
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
        <h1>UserName's Blogs</h1>
        <button onClick={() => navigate("/createNew")}>Create New</button>
        <label htmlFor="filter">Filter: </label>
        <input type="text" name="filter" onChange={filterData} value={filter} placeholder="Filter here"/>
        {displayBlogs()}
      </div>
  )

}