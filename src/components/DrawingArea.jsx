import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startStroke, addPoint, endStroke } from "../features/drawing/DrawingSlice.js";
import '../App.css'

export default function DrawingArea({canvasRef}) {
  //const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const { strokes } = useSelector((s) => s.drawing);

  // Resize canvas to device pixel ratio for sharp lines
  const resizeCanvas = useCallback((canvas) => {
    const ctx = canvas.getContext("2d");
    const { clientWidth, clientHeight } = canvas;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = clientWidth * dpr;
    canvas.height = clientHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); 
    ctx.scale(dpr, dpr);
  }, []);

  const drawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    strokes.forEach((stroke) => {
      const { color, size, points, blur=0, transparency=1 } = stroke;
      if (points.length < 2) return;
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.globalAlpha = transparency;                         // 0.0 - 1.0
      ctx.filter = blur > 0 ? `blur(${blur}px)` : "none";

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    });
  }, [strokes, canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas(canvas);
    drawAll();
    // redraw on window resize
    const onResize = () => {
      resizeCanvas(canvas);
      drawAll();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resizeCanvas, drawAll]);

  useEffect(() => {
    drawAll();
  }, [strokes, drawAll]);

  // Helpers to get canvas-relative coordinates
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  // Mouse events
  const onMouseDown = (e) => {
    const { x, y } = getPos(e);
    dispatch(startStroke({ x, y }));
  };
  const onMouseMove = (e) => {
    if (e.buttons !== 1) return; // only when pressed
    const { x, y } = getPos(e);
    dispatch(addPoint({ x, y }));
  };
  const onMouseUp = () => dispatch(endStroke());

  // Touch events
  const onTouchStart = (e) => {
    e.preventDefault();
    const { x, y } = getPos(e);
    dispatch(startStroke({ x, y }));
  };
  const onTouchMove = (e) => {
    e.preventDefault();
    const { x, y } = getPos(e);
    dispatch(addPoint({ x, y }));
  };
  const onTouchEnd = () => dispatch(endStroke());

  return (
    <div className={drawingArea}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair", background: "#fff" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
    </div>
  );
}
