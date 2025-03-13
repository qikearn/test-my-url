'use client';

import { useState } from "react";

export default function Share() {
  const [loading, setLoading] = useState(false);

  const handleRedirect = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getRedirect?linkId=123abc");
      const data = await response.json();

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl; // Redirect to publisher
      } else {
        alert("Invalid redirect link.");
      }
    } catch (error) {
      console.error("Error fetching redirect URL:", error);
      alert("Error fetching redirect URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ready to visit the publishers page?</h1>
      <button
        onClick={handleRedirect}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        {loading ? "Redirecting..." : "Go to Publisher Page"}
      </button>
    </div>
  );
}
