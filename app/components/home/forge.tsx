"use client";

import Link from "next/link";
import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mx-[122px] flex flex-row items-center justify-between">
      <div className="max-w-[541px] flex flex-col gap-[30px]">
        <h1 className="md:text-[32px] mt-[5px] font-satoshiBold font-bold text-main md:leading-[48px] md:tracking-[-1.28px]">
          wtf*&#!% is buildforge?
        </h1>
        <p className="md:text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          hey yo! welcome to the buildforge, a community of first time & early
          stage founders, builders and shippers working on their ideas. helping
          them go from 0-100.
        </p>
        <p className="md:text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          the amazing thing? we don’t give af about your ideas no matter how
          crappy it is. if you are building on-chain (web3) or off-chain (web2),
          we will hold your hands and take you above the clouds.
        </p>
        <p className="md:text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          btw, we share useful resources every week via a newsletter with
          builders. enter your email below and we’ll welcome you with a starter
          pack. see ya!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center md:gap-[15px]"
        >
          <input
            type="email"
            placeholder="your email"
            className="w-[300px] outline-none hidden h-[50px] bg-dark rounded-[10px] px-[20px] py-[12.5px] text-white font-clash font-normal md:leading-[26px] md:tracking-[-0.18px]"
            value={email}
            onChange={handleEmailChange}
          />

          <Link
            href="https://chat.whatsapp.com/LrGkqCkEUkoDFg8UVKuZD4"
            target="_blank"
          >
            <button className="bg-primary hover:bg-primary-100 active:bg-primary-200 active:shadow-primary transition-all duration-300 active:scale-95 rounded-[10px] px-[21px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed">
              join the buildforge
            </button>
          </Link>

          
          <Link href="https://x.com/buildforge" target="_blank">
            <button className="border-solid border-[#232328] border-[1.5px] hover:border-primary-100 active:bg-[#8066FF26] active:shadow-primary transition-all duration-300 active:scale-95 rounded-[10px] px-[21px] py-[12.5px] text-[#EEEEEE] hover:text-primary-100 font-medium md:text-[17px] leading-normal font-clashMed md:tracking-[-0.17px] w-[140px]">
              follow on x
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
