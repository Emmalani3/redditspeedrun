import {configureStore} from '@reduxjs/toolkit'
import drawingReducer from "./features/drawing/DrawingSlice.js";
import timerReducer from './features/timer/TimerSlice.js'
import redditReducer from './features/reddit/RedditSlice.js'

export const store = configureStore({
    reducer: {
        drawing: drawingReducer,
        timer: timerReducer,
        reddit: redditReducer
    },
});