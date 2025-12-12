import { useState } from "react";
import { generateQR } from "./api";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onGenerate() {
    setError("");
    if (!input.trim()) {
      setError("Please enter text or a URL");
      return;
    }
    try {
      setLoading(true);
      const url = await generateQR(input.trim());
      setQrUrl(url);
    } catch (e) {
      setError(e.message || "Failed to generate");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1>CloudQR Service</h1>
        <p className="subtitle">Type text or paste a URL — get a QR in seconds.</p>

        <textarea
          placeholder="Enter text or URL..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
        />

        <div className="controls">
          <button onClick={onGenerate} disabled={loading}>{loading ? "Generating..." : "Generate QR"}</button>
        </div>

        {error && <div className="error">{error}</div>}

        {qrUrl && (
          <div className="result">
            <h3>Your QR</h3>
            <img src={qrUrl} alt="QR code" />
            <a href={qrUrl} target="_blank" rel="noreferrer" download>Download</a>
          </div>
        )}
      </div>
    </div>
  );
}
