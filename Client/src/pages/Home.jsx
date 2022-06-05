import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import blogService from '../services/blog'
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import AllBlogs from "../components/AllBlogs"
import NoResult from "../components/NoResult"

const Home = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    const [defaultBlogs, setDefaultBlogs] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const getAllBlogs = async () => {
      const response = await blogService.getAll()
      setBlogs(response)
      setDefaultBlogs(response)
    }

    useEffect(() => {
      getAllBlogs()

    }, [])

    const filterSearch = async (e) => {
      e.preventDefault()

      const filteredBlogs = defaultBlogs.filter(blog => blog.category.toLowerCase().includes(searchValue.toLowerCase().trim()))
      setBlogs(filteredBlogs)

    }

    const clearFilter = () => {
      getAllBlogs()
      setSearchValue('')
    }

    return (
      <div>
        
        <Header />
        
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} searchBarSubmit={filterSearch} clearSearchBar={clearFilter}/>
      
        {blogs.length === 0 ? <NoResult /> :<AllBlogs blogs={blogs}/>}

      </div>
    )
}

export default Home