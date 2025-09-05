import {createSlice} from '@reduxjs/toolkit'

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        seconds: 0,
        isRunning: false,
        elapsedTime: 0,
    },
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
            state.elapsedTime = state.seconds;
        },
        resetTimer: (state) => {
            state.seconds = 0;
            state.elapsedTime = 0 
            state.isRunning = false;
        },
        tick: (state) => {
            if (state.isRunning && state.seconds > 0) {
                state.seconds -= 1;
                state.elapsedTime += 1;
            }  
            if (state.seconds === 0) {
                state.isRunning = false;
            }
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload;
        }
    },
});

export const {startTimer, stopTimer, resetTimer, tick, setSeconds} = timerSlice.actions;
export default timerSlice.reducer;
