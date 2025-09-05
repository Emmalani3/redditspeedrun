import { createSlice } from '@reduxjs/toolkit'

export const drawingSlice = createSlice({
    name: 'drawing',
    initialState: { enabled: true, color: '#000000', size: 6, strokes: [] },
    reducers: {
        setDrawing: (state, action) => {
            return action.payload;
        }, 
        setColor(state, action) {
            state.color = action.payload;
        },
        setSize(state, action) {
            state.size = action.payload;
        },
        startStroke(state, action) {
            const { x, y } = action.payload;
            state.isDrawing = true;
            state.redoStack = []; // new action invalidates redo
            state.strokes.push({
                color: state.color,
                size: state.size,
                points: [{ x, y }]
            });
        }, 
        clearDrawing: (state) => {
            return {};
        }
    },
});

export const { setDrawing, clearDrawing } = drawingSlice.actions;
export default drawingSlice.reducer;
