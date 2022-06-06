import React, { useState } from "react"
import axios from "axios"
import userService from '../services/user'
import { useNavigate } from "react-router-dom"
import '../styles/signUp.css'

const Signup = () => {

    const [img, setImg] = useState('')
    const [uploadImg, setUploadImage] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notif, setNotif] = useState('')
    const navigate = useNavigate()


    const fileSelectedHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(); 
        formData.append('file', img);
        formData.append('upload_preset', "pc72uywd");
        console.log('Checking 2')
    
        axios.post("https://api.cloudinary.com/v1_1/dd6bjhmmh/image/upload", formData)
        .then((response) => {
          console.log('Checkin')
          console.log('URL: ', response.data.url)
          setUploadImage(response.data.url)
          
        })
        .catch((error) => {
          console.log(error)
        })
    
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            username: username, 
            password: password, 
            name: name, 
            avatar: uploadImg
        }

        const response = await userService.newUser(newUser)
        console.log(response)
        setNotif('Successfully signed up! Please Log in now')

        setInterval(() => {
            setNotif(null)
            navigate('/login')
        }, 3000)
    } 

    return (

        <div className="signUp">
            <h2>Sign up</h2>
            <p>{notif}</p>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <p htmlFor="avatar">Add Avatar</p> <br />
                <input className="uploadImg" name="avatar" type='file' onChange={(e) => setImg(e.target.files[0])} /> <br />
                <button onClick={(e) => fileSelectedHandler(e)}>Upload Image</button> <br />
                <input type='text' placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/> <br />
                <input  type='text' placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/> <br />
                <input  type='password' placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
                <button>Sign up</button>
                <button onClick={() => navigate('/') }>Cancel</button>
            </form>
        </div>
    )
}

export default Signup