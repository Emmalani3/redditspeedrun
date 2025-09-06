import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArtResults } from '../features/reddit/RedditSlice.js';

export default function Search() {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchParam.trim()) return;
    dispatch(fetchArtResults(searchParam.trim()));
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '2px solid aqua' }}>
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
