"use client";

import React from "react";
import Image from "next/legacy/image";
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
        <div className="absolute top-0 left-0  w-[316px] h-[318px] rounded-[370px] md:rounded-[794px] rotate-90 md:rotate-0 blur-[154px] bg-[#8066FF3D]"></div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number border-[#232328] border-solid border-[1.5px]  flex flex-col md:flex md:flex-row md:gap-[19px]">
                  <figure>
                    <Image
                      src="https://cdn.dropp.cloud/86sgtk.svg"
                      alt="recent"
                      width={280}
                      height={200}
                    />
                  </figure>

                  <div className="flex flex-col gap-[27px] text-[#E1DEF0]">
                    <h3 className="text-[24px] font-bold leading-[36px] font-satBold tracking-[-0.96px]">
                      meet unknown
                    </h3>
                    <p className="max-w-[240px] text-[18px] font-normal text-center leading-[24px] font-clash tracking-[-0.18px]">
                      building a pet meal delivery service
                    </p>
                  </div>
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
