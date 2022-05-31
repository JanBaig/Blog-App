import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogService from '../services/blog'
import Category from '../components/Category'
import NoResult from '../components/NoResult'
import '../styles/blogPage.css'

export const Blog = () => {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState(null)
  const navigate = useNavigate();

  const getSingleBlog = async () => {
    const response = await blogService.getSingle(id)
    setCurrentBlog(response)
  }

  useEffect(() => {
    // Find the Blog corresponding to the ID
    getSingleBlog()

  }, [])

  return (
    <div>
        <button className='blogPage-btn' onClick={() => navigate('/')}>Home</button>
        {currentBlog ? <div className='blogPage'>
            <header>
              <p className='blogPage-date'>Published: {currentBlog.date}</p>
              <h1>{currentBlog.title}</h1>
              <Category categoryData={currentBlog.category}/>
            </header>

            <img src={currentBlog.background} alt='Background'  />
            <p className='blogPage-content'>{currentBlog.content}</p>

          </div> : <NoResult />
        }
    </div>
  )
}

export default Blog
