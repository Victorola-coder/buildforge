"use client";

import React from "react";
import Image from "next/legacy/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrows";
import unknown from "@/public/images/unknown.svg";

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
      <section className="relative embla md:my-[77px] md:mx-[222px]">
        <div className="absolute top-0 left-0 md:w-[691.902px] md:h-[351px] w-[430px] h-[318px] rounded-[430px] md:rounded-[794px] rotate-90 md:rotate-0 blur-[154px] bg-[#8066FF3D]"></div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number bg-recent flex flex-col md:flex md:flex-row md:gap-[19px]">
                  <figure>
                    <Image alt="recent" src={unknown} />
                  </figure>

                  <div className=" flex flex-col gap-[27px] text-[#E1DEF0]">
                    <h3 className="text-[24px] font-bold leading-[36px] font-satBold tracking-[-0.96px]">
                      meet unknown
                    </h3>
                    <p className="max-w-[240px] text-[18px] font-normal leading-[24px] font-clash tracking-[-0.18px]">
                      unknown is building a dating site to connect male cultists
                      with female cultists. weird, right?
                    </p>
                    <div className="flex flex-row gap-[16px]">
                      <button className="text-main-100 transition-all duration-300 hover:text-primary-100 active:shadow-primary active:bg-[#8066FF26] hover:border-primary-100 leading-normal font-clash text-[18px] py-[8.5px] px-[18.5px] border-[1.516px] border-solid border-[#312E49] rounded-[100px]">
                        twitter
                      </button>
                      <button className="text-main-100 transition-all duration-300 hover:text-primary-100 active:shadow-primary active:bg-[#8066FF26] hover:border-primary-100 leading-normal font-clash text-[18px] py-[8.5px] px-[18.5px] border-[1.516px] border-solid border-[#312E49] rounded-[100px]">
                        website
                      </button>
                    </div>
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
