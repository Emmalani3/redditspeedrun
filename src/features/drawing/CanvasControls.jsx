import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setSize, setBlur, setTransparency, undo, redo, clear } from "./DrawingSlice.js";

export default function DrawingToolbar() {
  const dispatch = useDispatch();
  const { color, size, blur, transparency } = useSelector((s) => s.drawing);

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

      <label>
        Blur{" "}
        <input
          type="range"
          min="1"
          max="64"
          value={blur}
          onChange={(e) => dispatch(setBlur(Number(e.target.value)))}
        />
        <span style={{ marginLeft: 8 }}>{blur}px</span>
      </label>

      <label>
        Transparency<input
          type="range"
          min="0"
          max="100"
          value={Math.round(transparency * 100)}
          onChange={(e) => dispatch(setTransparency(Number(e.target.value) / 100 ))}
        />
        <span style={{ marginLeft: 8 }}>{Math.round(transparency * 100)}%</span>
      </label>

      <button type="button" onClick={() => dispatch(undo())}>Undo</button>
      <button type="button" onClick={() => dispatch(redo())}>Redo</button>
      <button type="button" onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
}
