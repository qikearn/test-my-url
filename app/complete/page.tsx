"use client";

import { useEffect, useState } from "react";

export default function Complete() {
  const [referer, setReferer] = useState<string | null>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReferer = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get("sessionId");

        if (!sessionId) {
          setError("Session ID is missing. Cannot retrieve referer.");
          return;
        }

        // Fetch the referer from the server
        const response = await fetch(`/api/get-referer?sessionId=${sessionId}`);
        const data = await response.json();

        if (data.referer) {
          setReferer(data.referer);
        } else {
          setError("Referer not found or session expired.");
        }
      } catch (err) {
        console.error("Error fetching referer:", err);
        setError("An unexpected error occurred.");
      }
    };

    fetchReferer();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {error ? <h1>Error: {error}</h1> : <h1>Referer: {referer}</h1>}
    </div>
  );
}
