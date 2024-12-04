import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Months() {
  return (
    <section className="flex flex-col items-center gap-[50px]">
      <div className="mx-[222px] flex flex-col items-center gap-[44px] justify-center bg-[#0D0D11] border-[1.5px] border-[#312E4999] rounded-[26px] p-[32px]">
        <Image src={hero} alt="image" draggable={false} loading="lazy" />
        <p className="text-[#E1DEF0] font-bold font-satBold text-[48px] text-center max-w-[769px] leading-[54px] tracking-[-0.04em]">
          two months to work on ideas that take sleep of your eyes. wdyt?
        </p>
      </div>

      {/*  */}
      <div className="mx-[222px] flex flex-col gap-[50px] justify-center bg-[#0D0D11] border-[1.5px] border-[#312E4999] rounded-[26px] py-[74px] px-[80px]">
        <h4 className="text-[#E1DEF0] font-bold font-satBold text-[57px] text-start max-w-[815px] leading-[69px] tracking-[-0.04em]">
          it begins with forghaus. completely free. for first-time builders. all
          irl for 2 months.
        </h4>
        <div className="*:max-w-[815px] flex flex-col items-start gap-[40px] text-[18px] font-clash font-normal text-main lg:leading-[26px] lg:tracking-[-0.18px]">
          <p>
            it’s pretty simple. you pick an idea you are excited about and Every
            weekday, for two months, we will help you work on your ideas and
            turn it to something your friends will be excited about. Whether
            it’s hardware, software, or anything else you want to create.
          </p>
          <p>
            every weekday for two months, we will cover your workspace bills +
            internet bills + light snacks so you can fully focus on working on
            your ideas.
          </p>
          <p>
            We’re here to bet on first-time builders. We want to be the ones who
            see your potential before anyone else does. we will provide you with
            the mentorship, tools, and support to bring your wild, big-bang
            ideas to life—no matter how crazy they sound.
          </p>
          <p>
            the doors are open to young, ambitious builders with raw, unrefined
            ideas; high school students, dropouts, and college students. The
            goal is to Help you build and ship your ideas faster while giving
            you the mentorship + community you need to thrive.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col items-center gap-[50px]">
        <h3 className="text-[57px] font-bold font-satBold leading-[54px] tracking-[-0.04px] max-w-[554px] text-center ">
          we don’t give af about your ideas fr
        </h3>
        <p className="font-clash text-[22px] leading-[32px] tracking-[-0.01em] text-center max-w-[730px]">
          come work on ideas that excite you. no idea is too small or crazy. if
          you are building the next hardware, software, web3 or ai product, we
          will hold your hands and take you above the clouds.
        </p>
      </div>
    </section>
  );
}
