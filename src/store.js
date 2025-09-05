import {configureStore} from '@reduxjs/toolkit'
import drawingReducer from './features/drawing/DrawingSlice'
import timerReducer from './features/timer/TimerSlice'
import redditReducer from './features/reddit/RedditSlice'

export const store = configureStore({
    reducer: {
        drawing: drawingReducer,
        timer: timerReducer,
        reddit: redditReducer
    },
});