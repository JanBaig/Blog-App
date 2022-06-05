import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import blogService from '../services/blog'
import { useNavigate, useParams } from 'react-router-dom';

const CreateNew = ({ mode }) => {
  const [componentMode, setComponentMode] = useState(mode)
  const params = useParams()
  const [img, setImg] = useState('')
  const [uploadImg, setUploadImage] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [desc, setDesc] = useState('')
  const [contents, setContents] = useState('')
  const [date, setDate] = useState('')
  const [notif, setNotif] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (componentMode === false){ 
    
      blogService.getSingle(params.id)
      .then((response) => {
        console.log(response)

        setTitle(response.title)
        setCategory(response.category)
        setDesc(response.description)
        setContents(response.content)
        setDate(response.date)
        setUploadImage(response.background)

      })

    } 
    else {
      console.log('CreateNew Mode')
    }   

  }, [])

  const fileSelectedHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(); 
    formData.append('file', img);
    formData.append('upload_preset', "pc72uywd");
    console.log('Checking 2')

    Axios.post("https://api.cloudinary.com/v1_1/dd6bjhmmh/image/upload", formData)
    .then((response) => {
      console.log('Checkin')
      console.log('URL: ', response.data.url)
      setUploadImage(response.data.url)
      
    })
    .catch((error) => {
      console.log(error)
    })

  }

  const processCreateNewSubmit = async () => {
    console.log('UploadImg: ', uploadImg)
    console.log('Title: ', title)
    console.log('Category: ', category)
    console.log('Desc: ', desc)
    console.log('Contents: ', contents)
    console.log('Date', date)

    const  newBlog = {
      background: uploadImg, 
      title: title,
      category: category, 
      description: desc,
      content: contents,
      date: date
    }

    try {
      // Sending token
      const loggedData = JSON.parse(localStorage.getItem('loginData'))
      blogService.setToken(loggedData.token)
      
      // Createing new Blog
      const response = await blogService.createNew(newBlog)
      console.log(response)
      setNotif('Successfully Created!')
      navigate('/')

      setInterval(() => {
        setNotif(null)
        
      }, 1000);

    } catch(error) {
      setNotif(error.message)

      setInterval(() => {
        setNotif(null)
        navigate('/')
      }, 1000);

    }

  }

  const processEditSubmit = async() => {
    
    const updatedBlog = {
      background: uploadImg, 
      title: title,
      category: category, 
      description: desc,
      content: contents,
      date: date

    }

    const response = await blogService.updateSingle(params.id, updatedBlog)
    console.log(response)
    navigate(`/blog/${params.id}`)

  }

  const processFormData = async (e) => {
    e.preventDefault();

    if (mode){
      processCreateNewSubmit()
      console.log('Submit new')
    }
    else {
      processEditSubmit()
      console.log('Submit edit')
    }
    
  }

  return (
    <div>
      { mode? <h2>Create New Blog</h2> : <h2>Edit Blog</h2>}
      <p>{notif}</p>
      <form onSubmit={(e) => processFormData(e)}>
        <input name='title' type='text' placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} value={title}/> <br />

        <input type='file' onChange={(e) => setImg(e.target.files[0])} /> <br />
        <button onClick={(e) => fileSelectedHandler(e)}>Upload Image</button> <br />

        <label htmlFor="category">Blog category: </label>
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Travel">Select</option>
          <option value="Travel">Travel</option>
          <option value="Fashion">Fashion</option>
          <option value="History">History</option>
          <option value="General">General</option>
        </select> <br />

        <input name='description' type='text' placeholder='Enter description' value={desc} onChange={(e) => setDesc(e.target.value) }/> <br />
        <textarea name='content' placeholder='Enter blog content here' value={contents} onChange={(e) => setContents(e.target.value)} ></textarea> <br />
        <input name='date' type='date' value={date} onChange={(e) => setDate(e.target.value)}/> <br />
        <button type='submit'>Create</button>
      </form>
      
    </div>
  )
}

export default CreateNew
