import React from "react";
import { Carousel } from ".";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Recent() {
  return (
    <div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
