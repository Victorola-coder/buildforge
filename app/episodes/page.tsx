"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Episodes() {
  const router = useRouter();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch("/api/episodes");
      if (response.ok) {
        const data = await response.json();
        setEpisodes(data);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className="animate-slide-down text-center flex flex-col items-center justify-center gap-[20px]">
      {episodes.length > 0 ? (
        episodes.map((episode, index) => (
          <div key={index}>
            <p className="text-main-100 text-[15px] leading-normal font-clash">
              {/* {episode.picture} - {episode.link} */}
            </p>
          </div>
        ))
      ) : (
        <p className="text-main-100 text-[15px] leading-normal font-clash">
          Past Episodes will be shown here real soon
        </p>
      )}
      <button
        className="bg-primary hover:bg-primary-100 active:bg-primary-200 active:shadow-primary transition-all duration-300 active:scale-[0.97] rounded-[10px] px-[21px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed"
        onClick={() => router.back()}
      >
        Go back
      </button>
    </div>
  );
}
