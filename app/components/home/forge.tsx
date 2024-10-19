"use client";

import clsx from "clsx";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "../ui";
import { useState } from "react";
import Image from "next/legacy/image";

export default function Main() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json(); // Parse JSON response

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      toast.success(data.message || "Successfully subscribed!");
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
      setEmail(""); // Reset email after the operation
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isDisabled = !validEmail(email);

  return (
    <div className="mt-[58px] mx-[22px] md:mt-[85px] md:mx-[122px] md:flex md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col md:max-w-[541px] gap-[30px]">
        <h1 className="text-[24px] leading-[48px] tracking-[-0.96px] md:text-[32px] mt-[5px] font-satoshiBold font-bold text-main md:leading-[48px] md:tracking-[-1.28px]">
          wtt
          <span className="font-bold font-satBoldI">*&#!%</span> is buildforge?
        </h1>
        <p className="text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          hey yo! welcome to the buildforge, a community of first time & early
          stage founders, builders and shippers working on their ideas. helping
          them go from 0-100.
        </p>
        <p className="text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          the amazing thing? we don’t give af about your ideas no matter how
          crappy it is. if you are building on-chain (web3) or off-chain (web2),
          we will hold your hands and take you above the clouds.
        </p>
        <p className="text-[18px] font-clash font-normal text-main md:leading-[26px] md:tracking-[-0.18px]">
          btw, we share useful resources every week via a newsletter with
          builders. enter your email below and we’ll welcome you with a starter
          pack. see ya!
        </p>
        <div className="flex flex-col gap-[12px] md:flex md:flex-row md:items-center md:gap-[15px]">
          <Link
            href="https://chat.whatsapp.com/LrGkqCkEUkoDFg8UVKuZD4"
            target="_blank"
          >
            <button className="bg-primary hover:bg-primary-100 active:bg-primary-200 active:shadow-primary transition-all duration-300 active:scale-95 rounded-[10px] px-[21px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed">
              join the buildforge
            </button>
          </Link>

          <Link href="https://x.com/thebuildforge" target="_blank">
            <button className="border-solid border-[#232328] border-[1.5px] hover:border-primary-100 active:bg-[#8066FF26] active:shadow-primary transition-all duration-300 active:scale-95 rounded-[10px] px-[21px] py-[12.5px] text-[#EEEEEE] hover:text-primary-100 font-medium md:text-[17px] leading-normal font-clashMed md:tracking-[-0.17px] w-[140px]">
              follow on x
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden w-[541px] h-[541px] bg-primary rounded-full">
        <div className="w-[300px] h-[300px] bg-dark rounded-full">
          <div className="w-[150px] h-[150px] bg-white rounded-full">
            <div className="w-[75px] h-[75px] bg-dark rounded-full">
              <div className="w-[37.5px] h-[37.5px] bg-primary rounded-full">
                <div className="w-[18.75px] h-[18.75px] bg-white rounded-full">
                  <div className="w-[9.375px] h-[9.375px] bg-dark rounded-full">
                    <div className="w-[4.6875px] h-[4.6875px] bg-primary rounded-full">
                      <div className="w-[2.34375px] h-[2.34375px] bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <figure className="hidden md:block">
          <Image
            height={300}
            width={500}
            alt="welcome!"
            layout="responsive"
            className="animate-spin-slow transition-all duration-300"
            draggable={false}
            src="https://cdn.dropp.cloud/uedqjh.svg"
          />
        </figure>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-[39px] md:mt-0 items-center justify-center gap-[21px] rounded-[18px] border-[1px] border-[#232328] bg-[#0D0D11] px-[13px] pt-[20px] pb-[13px]"
        >
          <header>
            <h3 className="text-[18px] leading-[24px] md:text-[20px] text-center md:leading-[24px] tracking-[-0.5px] font-satBold font-bold text-[#F3EFFD] md:tracking-[-0.5px]">
              join the builforge bytes
            </h3>
          </header>

          <fieldset>
            <input
              type="email"
              placeholder="your email"
              className={clsx(
                validEmail(email)
                  ? "border-primary-100 text-main-100"
                  : "border-[#232328] focus:border-[#A8A5C0] text-[#A8A5C0]",
                "w-[360px] outline-none transition-all duration-300 border-[1px] bg-dark rounded-[10px] px-[20px] py-[12.5px] placeholder:text-[#A8A5C0] font-clash text-[15px] font-normal md:leading-[24px] md:tracking-[-0.15px]"
              )}
              value={email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <Button
              disabled={isDisabled}
              loading={loading}
              className="w-[360px] text-center mx-auto block"
            >
              subscribe
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
