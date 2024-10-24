"use client";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div>
      <h1 className="text-center text-[40px] leading-[48px] mb-[45px] tracking-[-1.6px] max-w-[386px] md:max-w-[794px] md:mb-[77px] mx-auto md:text-[78px] md:leading-[90px] md:tracking-[-3.12px] text-main font-satBold font-bold">
        we’re{" "}
        <span className="text-primary font-bold font-satBoldI">*bullish*</span>{" "}
        on first time & early stage{" "}
        <div className="">
          <TypeAnimation
            sequence={["Founders", 1000, "Builders", 1000, "Shippers"]}
            wrapper="div"
            speed={99}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </h1>
    </div>
  );
}
