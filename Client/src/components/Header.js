import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [userLogged, setUserLogged] = useState(null)

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    if (loginData !== null){
      setUserLogged(loginData)
    }

  }, [])

  return (
    <div className='home-header'>
        <div className='home-headerBtn' style={{marginRight: 950, marginTop: 5 }}>
          <button className='home-headerBtn-first' style={{marginRight: 10}} onClick={() => navigate('/signup')}>Sign up</button>
          <button onClick={() => navigate('/login')}>Log in</button>
        </div>
        
        <div className="profilePic">
          <img src='https://www.odeliver.net/images/members/default.png' width='55' height='55' />
          {userLogged ? <p>{userLogged.username}</p> : <p>Guest</p>}
        </div>
        
        <h1>Blog</h1>
        <p>Some description here</p>
    </div>
  )
}

export default Header
