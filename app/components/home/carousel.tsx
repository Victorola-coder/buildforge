"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrows";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <section className="relative embla my-[77px] mx-[222px]">
        <div className="absolute top-0 left-0 w-[794px] h-[318px] rounded-[794px] blur-[154px] bg-[#8066FF3D]"></div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide w-[488px]" key={index}>
                <div className="embla__slide__number bg-recent">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[60px]">
          <div className="flex flex-row gap-[22px] items-center justify-center ">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmblaCarousel;
