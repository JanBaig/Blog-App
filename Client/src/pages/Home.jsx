import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import blogService from '../services/blog'
import Blog from "../components/Blog"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import AllBlogs from "../components/AllBlogs"

const Home = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])

    const getAllBlogs = async () => {
      const response = await blogService.getAll()
      setBlogs(response)
    }

    useEffect(() => {
      getAllBlogs()

    }, [])

    return (
      <div>
        <button onClick={() => navigate('/signup')}>Sign up</button>
        <button onClick={() => navigate('/login')}>Log in</button>
        
        {/* Header Component */}
        <Header />
        
        {/* Search Bar */}
        <SearchBar />

        {/* Display All blogs - Need to pass in props */}
        <AllBlogs blogs={blogs}/>

      </div>
    )
}

export default Home