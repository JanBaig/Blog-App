import React from 'react'
import '../styles/blog.css'
import Category from './Category'
import { useNavigate } from 'react-router-dom'

const Blog = ({ blogData }) => {
    console.log(blogData)
    const navigate = useNavigate()

    return (
        <div  className="grid-item">
            <img src={blogData.background} alt='background' className='grid-item-background'/>
            <Category categoryData={blogData.category}/>
            <h3>{blogData.title}</h3>
            <p className='grid-item-desc'>{blogData.description}</p>

            <footer>
                <div className='grid-item-author'>
                    <img src={blogData.user.avatar}/>
                    <h6>{blogData.user.name}</h6>
                    <p>{blogData.date}</p>
                </div>
                <button onClick={() => navigate(`/blog/${blogData.id}`)}>View</button>
            </footer>

        </div>
    )
}

export default Blog