import React from 'react'
import '../styles/searchBar.css'

const SearchBar = ({ searchValue, setSearchvalue, clearSearch, searchBarSubmit }) => {
  return (
    <div className='searchBar'>
      <form onSubmit={searchBarSubmit}>
        <input 
        type='text'
        onChange={setSearchvalue}
        placeholder='Filter Blogs'
        value={searchValue}
        />
        {searchValue && <span onClick={clearSearch}>X</span>}
        <button>Search</button>

      </form>
    </div>
  )
}

export default SearchBar
