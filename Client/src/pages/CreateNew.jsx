import React, { useState } from 'react'

const CreateNew = () => {
  const [img, setImg] = useState('')
    
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.value)
  }


  return (
    <div>
      <h2>Create New Blog</h2>
      <form>
        <input type='text' placeholder='Enter Title'/> <br />
        <input type='file' onChange={fileSelectedHandler} />
        <p>Category Here</p>
        <input type='text' placeholder='Enter description'/> <br />
        <textarea placeholder='Enter blog content here'></textarea>
        <p>Date here</p>

      </form>
        

    </div>
  )
}

export default CreateNew
