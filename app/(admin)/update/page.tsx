// pages/admin/updateEpisode.js
import { useState } from "react";

export default function UpdateEpisode() {
  const [episodeId, setEpisodeId] = useState("");
  const [link, setLink] = useState("");
  const [picture, setPicture] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("link", link);
    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const response = await fetch(`/api/upload/update/${episodeId}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        alert("Episode updated successfully");
      } else {
        alert("Failed to update episode");
      }
    } catch (error) {
      console.error("Error updating episode:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Episode ID"
        value={episodeId}
        onChange={(e) => setEpisodeId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setPicture(e.target.files?.[0] ?? null)}
      />
      <button type="submit">Update Episode</button>
    </form>
  );
}
