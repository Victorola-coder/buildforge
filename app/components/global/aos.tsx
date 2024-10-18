"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AoS() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    return () => {
      AOS.refresh();
    };
  }, []);
  // return no jsx
  return null;
}
