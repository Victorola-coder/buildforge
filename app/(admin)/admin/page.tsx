"use client";

import { useState } from "react";

export default function UploadEpisode() {
  const [picture, setPicture] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ picture, link }),
    });

    if (response.ok) {
      alert("Episode uploaded successfully!");
      setPicture("");
      setLink("");
    } else {
      alert("Failed to upload episode.");
    }
  };

  return (
    <div>
      <h1>Upload Episode</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Picture URL:</label>
          <input
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
