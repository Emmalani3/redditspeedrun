import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectRedditStatus,
  selectRedditError,
  selectLastQuery,
  selectResultsForQuery
} from '../features/reddit/RedditSlice.js';
import '../styles/styles.css';

export default function Gallery() {
  const status = useSelector(selectRedditStatus);
  const error  = useSelector(selectRedditError);
  const query  = useSelector(selectLastQuery);
  const results = useSelector(s => selectResultsForQuery(s, query || ''));

  if (status === 'loading') return <p>Searching r/art…</p>;
  if (status === 'failed')  return <p role="alert">Error: {error}</p>;
  if (!results.length)      return <p>Try a search to see art results.</p>;

  return (
    <div className="gallery">
      {results.slice(0, 3).map(item => (
        <a key={item.id} href={item.postUrl} target="_blank" rel="noreferrer" className="tile" title={item.title}>
          <img src={item.imageUrl} alt={item.title} />
        </a>
      ))}
    </div>
  );
}
