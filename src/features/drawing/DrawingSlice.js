import { createSlice } from '@reduxjs/toolkit'

export const drawingSlice = createSlice({
    name: 'drawing',
    initialState: { 
        isDrawing: true, 
        color: '#000000', 
        size: 6, 
        strokes: [],
        redoStack: [],
    },
    reducers: {
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
        addPoint(state, action) {
            if (!state.isDrawing || state.strokes.length === 0) return;
            const { x, y } = action.payload;
            state.strokes[state.strokes.length - 1].points.push({ x, y });
        },
        endStroke(state) {
            state.isDrawing = false;
        },
        undo(state) {
            if (state.strokes.length === 0) return;
            const last = state.strokes.pop();
            state.redoStack.push(last);
        },
        redo(state) {
            if (state.redoStack.length === 0) return;
            const s = state.redoStack.pop();
            state.strokes.push(s);
        },
        clear(state) {
            state.strokes = [];
            state.redoStack = [];
            state.isDrawing = false;
        }
    },
});

export const { setColor,
  setSize,
  startStroke,
  addPoint,
  endStroke,
  undo,
  redo,
  clear } = drawingSlice.actions;
export default drawingSlice.reducer;
