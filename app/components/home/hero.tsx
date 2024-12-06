"use client";
import { Button } from "../ui";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="mb-[72px] gap-[72px]">
      <h1 className="text-center text-[40px] leading-[48px] mb-[45px]_ tracking-[-1.6px] max-w-[386px] md:max-w-[794px] md:mb-[77px]_ mx-auto md:text-[78px] md:leading-[90px] md:tracking-[-3.12px] text-main font-satBold font-bold">
        an{" "}
        <span className="text-primary font-bold font-satBoldI">
          *irl school*
        </span>{" "}
        to build and ship your big-bang ideas
        <div className="hidden">
          <TypeAnimation
            sequence={["Founders", 1000, "Builders", 1000, "Shippers"]}
            wrapper="div"
            speed={{ type: "keyStrokeDelayInMs", value: 250 }}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </h1>
      <Button className="!bg-transparent border-[#232328] border-[1.5px]">
        join the waitlist
      </Button>
    </div>
  );
}
