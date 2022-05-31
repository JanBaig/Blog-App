import React from 'react'
import '../styles/category.css'

const Category = ({ categoryData }) => {

  return (
    <div className='categoryLabel'>
      {categoryData}
    </div>
  )
}

export default Category 
