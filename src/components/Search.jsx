import React, { useState } from 'react';

function Search() {
  const outline = { 
    border: '2px solid aqua',
  }
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // stop page reload
    console.log(searchParam); // do something with searchParam
  };

  return (
    <div style={outline}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={searchParam} 
          onChange={(e) => setSearchParam(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
