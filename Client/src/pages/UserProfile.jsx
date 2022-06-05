import React, { useEffect, useState } from 'react'

const UserProfile = () => {
    const [userData, setUserData] = useState('') 
    const [numBlogs, setNumBlogs] = useState('')

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem('loginData'))
        console.log(loginData)
        setUserData(loginData)
        setNumBlogs(loginData.blogsID.length)

    }, [])

  return (
    <div>
        <h2>User Information</h2>
        <img src={userData.avatar} width='100' height='100'/>
        <p>Username: {userData.username}</p>
        <p>Name: {userData.name}</p>
        <p>Number of blogs published: {numBlogs}</p> 
    </div>
  )
}

export default UserProfile
