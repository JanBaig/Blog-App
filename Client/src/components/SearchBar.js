import React from 'react'
import '../styles/searchBar.css'

const SearchBar = ({ searchValue, setSearchValue, searchBarSubmit, clearSearchBar }) => {

  return (
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
  )
}

export default SearchBar
