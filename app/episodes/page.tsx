"use client";
        
import { useRouter } from "next/navigation";

export default function Episodes() {
  const router = useRouter(); // Initialize useRouter

  return (
    <div className="text-center">
      <p>Past Episodes will be shown here</p>
      <button onClick={() => router.back()}>Go back</button>
    </div>
  );
}
