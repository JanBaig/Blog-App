import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [userLogged, setUserLogged] = useState(null)
  const [userImg, setUserImg] = useState('https://www.odeliver.net/images/members/default.png')

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    if (loginData !== null){
      setUserLogged(loginData)
      setUserImg(loginData.avatar)
    } 

  }, [])

  return (
    <div className='home-header'>
        <div className='home-headerBtn' style={{ marginRight: 950, marginTop: 5 }}>
          <button className='home-headerBtn-first' style={{marginRight: 10}} onClick={() => navigate('/signup')}>Sign up</button>
          <button onClick={() => navigate('/login')}>Log in</button>
        </div>
        
        <div className="profilePic">
          <img src={userImg} width='55' height='55' onClick={() => navigate(`/userProfile`) } />
          {userLogged ? <p>{userLogged.username}</p> : <p>Guest</p>}
        </div>
        
        <h1>Blog App</h1>
        <p>Welcom! Sign in to create, update and delete a blog</p>
    </div>
  )
}

export default Header
