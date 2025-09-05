import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setSize, undo, redo, clear } from "./DrawingSlice.js";

export default function DrawingToolbar() {
  const dispatch = useDispatch();
  const { color, size } = useSelector((s) => s.drawing);

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
      <label>
        Color{" "}
        <input
          type="color"
          value={color}
          onChange={(e) => dispatch(setColor(e.target.value))}
        />
      </label>

      <label>
        Size{" "}
        <input
          type="range"
          min="1"
          max="64"
          value={size}
          onChange={(e) => dispatch(setSize(Number(e.target.value)))}
        />
        <span style={{ marginLeft: 8 }}>{size}px</span>
      </label>

      <button type="button" onClick={() => dispatch(undo())}>Undo</button>
      <button type="button" onClick={() => dispatch(redo())}>Redo</button>
      <button type="button" onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
}
