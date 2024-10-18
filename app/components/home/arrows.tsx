"use client";

import { EmblaCarouselType } from "embla-carousel";
import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../global/svgs";
import clsx from "clsx";

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <ArrowLeft
        className={clsx(
          "h-[56px] p-[11px] w-[56px] border-[1.67px] border-[#312E49] rounded-[116.667px] active:bg-[#8066FF26] hover:border-primary-100 hover:text-primary-100 transition-all duration-300"
        )}
      />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <ArrowRight className="h-[56px] w-[56px] p-[11px] border-[1.67px] border-[#312E49] rounded-[116.667px] active:bg-[#8066FF26] hover:border-primary-100 hover:text-primary-100 transition-all duration-300" />
      {children}
    </button>
  );
};
