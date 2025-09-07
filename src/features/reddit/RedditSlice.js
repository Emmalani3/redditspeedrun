// src/features/reddit/RedditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { redditFetch, getRedditToken } from './cors';

// helper for fixing &amp; in Reddit preview URLs
function decodeEntities(s = '') {
  return s.replace(/&amp;/g, '&');
}

/**
 * Thunk: search r/art for a keyword and return image posts.
 * Caches results per keyword.
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

    const token = getRedditToken();
    if (!token) {
      throw new Error('Please sign in with Reddit first to fetch results.');
    }

    // OAuth host (CORS-friendly)
    const data = await redditFetch(
      `/r/art/search.json?restrict_sr=1&sort=relevance&q=${encodeURIComponent(k)}&limit=50&raw_json=1`
    );

    const items = (data?.data?.children ?? [])
      .map(({ data: d }) => {
        // Skip NSFW/spoilers (optional)
        if (d?.over_18 || d?.spoiler) return null;

        // Prefer preview source (usually higher-res), fall back to url/overridden
        const preview = d?.preview?.images?.[0]?.source?.url || '';
        const raw = preview || d?.url_overridden_by_dest || d?.url || '';
        const imageUrl = decodeEntities(raw);

        // Only keep direct image links
        if (!/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(imageUrl)) return null;

        return {
          id: d.id,
          title: d.title,
          imageUrl,                                        // what Gallery uses
          postUrl: `https://www.reddit.com${d.permalink}`, // what Gallery uses
        };
      })
      .filter(Boolean);

    return { keyword: k, items };
  }
);

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    itemsByQuery: {},   // { [keyword]: Array<{id,title,imageUrl,postUrl}> }
    status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    lastQuery: null,
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
