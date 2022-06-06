import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/userProfile.css'

const UserProfile = () => {
    const guestUser = {
      avatar: 'https://www.odeliver.net/images/members/default.png',
      username: "Guest",
      name: "Guest"
    }

    const [userData, setUserData] = useState(guestUser) 
    const [numBlogs, setNumBlogs] = useState('')
    const [guest, setGuest] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem('loginData'))
        if (loginData !== null){
          setUserData(loginData)
          setNumBlogs(loginData.blogsID.length)
        }
        else {
          setGuest(true)
        }
        
    }, [])

    const logOut = () => {
      localStorage.removeItem('loginData')
      navigate('/')
    }

  return (
    <div className='profile'>
        <h2>User Information</h2>
        <img src={userData.avatar} width='90' height='90'/>
        <p>Username: {userData.username}</p>
        <p>Name: {userData.name}</p>
        {guest? <p></p> : <div><button onClick={logOut}>Log out</button> <button onClick={() => navigate('/')}>Cancel</button> </div>}
    </div>
  )
}

export default UserProfile
