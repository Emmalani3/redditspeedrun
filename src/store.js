import {configureStore} from '@reduxjs/toolkit'
import drawingReducer from './features/drawingSlice'
import timerReducer from './features/timerSlice'
import redditReducer from './features/redditSlice'

export default configureStore({
    reducer: {
        drawing: drawingReducer,
        timer: timerReducer,
        reddit: redditReducer
    },
});