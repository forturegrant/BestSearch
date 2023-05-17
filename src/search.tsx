import React from 'react';
import SearchInput from './searchInput';
import Ant from './ant';
import './search.scss';

function Search() {
  return (
    <div className='search-container'>
      {/* <div className='search-container-title'>Search Trends</div>
      <div style={{ width: '80%',  margin: '0 auto' }}>
        <SearchInput />
      </div> */}
      <div>
        <Ant />
        <p className='search-container-title'>fafaf</p>
      </div>
    </div>
  );
}

export default Search;
