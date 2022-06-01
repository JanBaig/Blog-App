import React from 'react'
import '../styles/searchBar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ searchValue, setSearchValue, searchBarSubmit, clearSearchBar }) => {
  const navigate = useNavigate();

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

      <button onClick={() => navigate('/createNew')} className='newBlog-btn'>New Blog</button>

    </div>
    
  )
}

export default SearchBar
