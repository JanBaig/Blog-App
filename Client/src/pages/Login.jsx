import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user'
import '../styles/login.css'

const Login = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [notif, setNotif] = useState('')
    const  navigate = useNavigate();

    
    const submitLogin = async () => {
        const credentials = {
            username: username,
            password: password
        }

        try {

            const response = await userService.userLogin(credentials)
            // Saving to local & .stringify JS obj -> String & .parse() String -> JS Obj
            localStorage.setItem('loginData', JSON.stringify(response))
            console.log(localStorage.getItem('loginData'))
            navigate('/')

        }
        catch(error) {
            setNotif(error.response.data.error)
            localStorage.removeItem('loginData')
        }
        
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            <p>{notif}</p>
            <input onChange={(e) => setUsername(e.target.value)} type='text' placeholder="Enter Username" value={username}/> <br />
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Enter Password" value={password}/> <br />
            <button onClick={submitLogin}>Login</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}

export default Login