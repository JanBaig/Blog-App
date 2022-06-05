import React, { useEffect, useState } from 'react'
import '../styles/searchBar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ searchValue, setSearchValue, searchBarSubmit, clearSearchBar }) => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('loginData') == null){
      setLoggedUser(false)
    }
  }, [])

  return (

    <div className='flex-container'>
      <div className='searchBar'>
        <form onSubmit={searchBarSubmit}>
          <input 
          type='text'
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Filter Blogs'
          value={searchValue}
          />
          {searchValue && <span onClick={clearSearchBar}>X</span>}
          <button>Search</button>
        </form>
      </div>

      {loggedUser? <button onClick={() => navigate('/createNew')} className='newBlog-btn'>New Blog</button>: <p></p>}

    </div>
    
  )
}

export default SearchBar
