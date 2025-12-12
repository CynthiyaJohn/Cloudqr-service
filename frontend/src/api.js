// Replace with your API Gateway endpoint
const API_URL = process.env.VITE_API_URL || "YOUR_API_GATEWAY_URL";

export async function generateQR(text) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || `API error ${res.status}`);
  }
  const data = await res.json();
  // Expect { qrUrl: "..."}
  return data.qrUrl;
}
