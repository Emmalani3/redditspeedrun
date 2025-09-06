// src/features/reddit/RedditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Thunk: search r/art for a keyword and return 3 random image posts.
 * We also cache results per keyword to reduce API calls / rate-limit hits.
 */
export const fetchArtResults = createAsyncThunk(
  'reddit/fetchArtResults',
  async (keyword, { getState }) => {
    const k = (keyword || '').trim();
    if (!k) throw new Error('Keyword required');

    const { reddit } = getState();
    if (reddit.itemsByQuery[k]?.length) {
      // Serve from cache
      return { keyword: k, items: reddit.itemsByQuery[k] };
    }
    
    const url = `/reddit/r/art/search.json?restrict_sr=1&sort=relevance&q=${encodeURIComponent(k)}&limit=50&raw_json=1`;
    //const url = `https://www.reddit.com/r/art/search.json?restrict_sr=1&sort=relevance&q=${encodeURIComponent(k)}&limit=50`;

    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      // Reddit may rate limit with 429; surface a helpful error
      const text = await res.text().catch(() => '');
      throw new Error(`Reddit API ${res.status}: ${text || res.statusText}`);
    }

    const json = await res.json();
    const children = json?.data?.children || [];

    // Keep posts that actually have an image
    const candidates = children
      .map(c => c?.data)
      .filter(d => d && !d.over_18 && !d.spoiler)
      .filter(
        d =>
          d.post_hint === 'image' ||
          (d.preview && d.preview.images && d.preview.images[0]?.source?.url)
      )
      .map(d => {
        const raw =
          d.preview?.images?.[0]?.source?.url || d.url_overridden_by_dest || '';
        const imageUrl = raw.replace(/&amp;/g, '&'); // fix HTML entities
        return {
          id: d.id,
          title: d.title,
          imageUrl,
          postUrl: `https://www.reddit.com${d.permalink}`,
        };
      });

    // Pick 3 random unique items (or fewer if not enough)
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    const three = shuffled.slice(0, 3);

    return { keyword: k, items: three };
  }
);

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    itemsByQuery: {},          // { [keyword]: Array<{id,title,imageUrl,postUrl}> }
    status: 'idle',            // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,               // string | null
    lastQuery: null,           // last searched keyword
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArtResults.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchArtResults.fulfilled, (state, action) => {
        const { keyword, items } = action.payload;
        state.itemsByQuery[keyword] = items;
        state.lastQuery = keyword;
        state.status = 'succeeded';
      })
      .addCase(fetchArtResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Request failed';
      });
  },
});

export default redditSlice.reducer;

// Selectors
export const selectRedditStatus = s => s.reddit.status;
export const selectRedditError  = s => s.reddit.error;
export const selectLastQuery    = s => s.reddit.lastQuery;
export const selectResultsForQuery = (s, keyword) =>
  s.reddit.itemsByQuery[keyword] || [];
