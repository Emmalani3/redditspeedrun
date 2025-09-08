import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectRedditStatus,
  selectRedditError,
  selectLastQuery,
  selectResultsForQuery
} from '../features/reddit/RedditSlice.js';
import '../App.css';

export default function Gallery() {
  const status = useSelector(selectRedditStatus);
  const error  = useSelector(selectRedditError);
  const query  = useSelector(selectLastQuery);
  const results = useSelector(s => selectResultsForQuery(s, query || ''));

  if (status === 'loading') return <p>Searching r/art ... </p>;
  if (status === 'failed')  return <p role="alert">Error: {error}</p>;
  if (!results.length)      return <p>Try a search to see art results from r/art and find inspiration. Draw your rendition of the art in the canvas area and download a copy to keep or share. Click the images to visit the original post and meme your art in the comments!</p>;

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
