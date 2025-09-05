import { useState } from "react";

/**
 * DownloadControls
 * Props:
 * - canvasRef: React ref to the <canvas> the user is drawing on
 * - defaultFilename?: string (optional)
 */
export default function DownloadControls({ canvasRef, defaultFilename = "drawing" }) {
  const [format, setFormat] = useState("png"); // 'png' | 'jpeg'
  const [scale, setScale] = useState(1);       // 1 or 2 (export at 2x for crisper image)
  const [fillBg, setFillBg] = useState(false); // fill background with white (useful for JPEG)

  const handleDownload = () => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const mime = format === "png" ? "image/png" : "image/jpeg";
    const filename = `${defaultFilename}.${format}`;
    const quality = 0.92; // JPEG quality (ignored for PNG)

    // Make an export canvas in case we want to scale or add a background
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width * scale;
    exportCanvas.height = canvas.height * scale;
    const exCtx = exportCanvas.getContext("2d");

    // Optional white background (great for JPEG so it's not black/transparent)
    if (fillBg || format === "jpeg") {
      exCtx.fillStyle = "#ffffff";
      exCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    }

    // Draw source canvas -> export canvas (respecting scale)
    exCtx.drawImage(
      canvas,
      0, 0, canvas.width, canvas.height,
      0, 0, exportCanvas.width, exportCanvas.height
    );

    // Create a download link
    const dataURL = exportCanvas.toDataURL(mime, quality);
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = filename;
    link.click();
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <label>
        Format{" "}
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="png">PNG (transparent)</option>
          <option value="jpeg">JPEG</option>
        </select>
      </label>

      <label>
        Scale{" "}
        <select value={scale} onChange={(e) => setScale(Number(e.target.value))}>
          <option value={1}>1×</option>
          <option value={2}>2× (sharper)</option>
        </select>
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="checkbox"
          checked={fillBg}
          onChange={(e) => setFillBg(e.target.checked)}
        />
        White background
      </label>

      <button onClick={handleDownload}>Download</button>
    </div>
  );
}
