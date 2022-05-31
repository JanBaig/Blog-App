import React from 'react'
import Blog from './Blog'
import '../styles/allBlogs.css'

const AllBlogs = ({ blogs }) => {
  return (
    <div className='allBlogs'>
        {blogs.map((blog, count) => <Blog blogData={blog} key={count}/>)}
    </div>
  )
}

export default AllBlogs
