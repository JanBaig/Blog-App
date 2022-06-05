import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogService from '../services/blog'
import CreateNew from './CreateNew'

const EditBlog = () => {

  return (
    <div>
        <CreateNew mode={false}/>
    </div>
  )
}

export default EditBlog
