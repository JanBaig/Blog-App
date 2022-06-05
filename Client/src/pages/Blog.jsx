import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogService from '../services/blog'
import userService from '../services/user'
import Category from '../components/Category'
import NoResult from '../components/NoResult'
import '../styles/blogPage.css'

export const Blog = () => {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState(null)
  const [blogUser, setBlogUser] = useState('')
  const [verifiedOwner, setVerifiedOwner] = useState(false) 
  const navigate = useNavigate();

  const getSingleBlog = () => {
    blogService.getSingle(id)
    .then((response) => {
      setCurrentBlog(response)
    })
    .catch((error) => {
      console.log(error)
      setCurrentBlog(null)
    })
    
  }

  const getBlogUser = () => {
    if (currentBlog) {
      userService.getUser(currentBlog.user)
      .then((response) => {
        setBlogUser(response)
        
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  } 

  const verifyBlogOwner = () => {

    const loginData = JSON.parse(localStorage.getItem('loginData'))
    if (loginData !== null){
      if (loginData.username === blogUser.username){
      setVerifiedOwner(true)
      }
      else {
        setVerifiedOwner(false)
      }
    
    }
    

  }

  useEffect(() => {
    // Find the Blog corresponding to the ID
    getSingleBlog()
  }, [])

  useEffect(() => {
    getBlogUser()
  }, [currentBlog])

  useEffect(() => {
    verifyBlogOwner()
  }, [blogUser])


  const deleteBlog = async () => {
  
    if (window.confirm('Delete dis?')){

      try {
        const response = await blogService.deleteSingle(id)
        navigate('/')
        console.log(response)
      }
      catch(error) {
        console.log(error.message)
      }
    }
  }

  const editBlog = () => {
    // Need to implement PUT requests 
    navigate(`/editBlog/${id}`)
  }

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

            <div className='authorInfo'>
              <img className='side-side' src={blogUser.avatar} />
              <p className='side-side'>By: {blogUser.name}</p>
            </div>

            {verifiedOwner ? <div className='blogPageButtons'>
              <button onClick={editBlog}>Edit</button>
              <button onClick={deleteBlog}>Delete</button>
            </div>: <p></p>}

            <p className='blogPage-content'>{currentBlog.content}</p>

          </div> : <NoResult />
        }
    </div>
  )
}

export default Blog
