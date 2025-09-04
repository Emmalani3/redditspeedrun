import { createSlice } from '@reduxjs/toolkit'

export const drawingSlice = createSlice({
    name: 'drawing',
    initialState: { enabled: true, color: '#000000', size: 6, strokes: [] },
    reducers: {
        setDrawing: (state, action) => {
            return action.payload;
        },  
        clearDrawing: (state) => {
            return {};
        }
    },
});

export const { setDrawing, clearDrawing } = drawingSlice.actions;
export default drawingSlice.reducer;
