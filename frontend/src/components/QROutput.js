import React from "react";

function QROutput({ qrUrl }) {
  if (!qrUrl) {
    return (
      <div style={styles.placeholder}>
        <p>No QR generated yet. Enter text and generate!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Your QR Code</h2>
      <img
        src={qrUrl}
        alt="Generated QR"
        style={styles.image}
      />
      <a href={qrUrl} download="qr-code.png" style={styles.downloadBtn}>
        Download QR
      </a>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    textAlign: "center",
  },
  image: {
    width: "220px",
    height: "220px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    background: "#fff",
  },
  placeholder: {
    textAlign: "center",
    padding: "40px",
    opacity: 0.7,
    fontSize: "15px",
  },
  downloadBtn: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 15px",
    background: "#4CAF50",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default QROutput;
