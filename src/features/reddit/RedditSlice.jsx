import {createSlice} from '@reduxjs/toolkit'

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: [],
    reducers: {
        setPosts: (state, action) => {
            return action.payload;
        },
    },
});

export const {setPosts} = redditSlice.actions;
export default redditSlice.reducer;
