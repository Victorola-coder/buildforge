"use client";

import clsx from "clsx";
import { toast } from "sonner";
import { Button } from "../ui";
import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [cityCountry, setCityCountry] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, cityCountry }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      toast.success(data.message || "Successfully subscribed!");
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
      setEmail("");
      setCityCountry("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "cityCountry") {
      setCityCountry(value);
    }
  };

  const validEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isDisabled = !validEmail(email) || cityCountry.trim() === "";

  return (
    <div className="mt-[58px] flex flex-col items-center lg:mt-[85px] lg:gap-[69px]">
      <div className="flex flex-col items-center lg:max-w-[541px] gap-[30px]">
        <h1 className="text-[24px] leading-[48px] tracking-[-0.96px] lg:text-[57px] mt-[5px] font-satBold font-bold text-main lg:leading-[54px] lg:tracking-[-0.04em]">
          wanna get in?
        </h1>
        <p className="text-[18px] font-clash text-center md:max-w-[720px] font-normal text-[#E1DEF0] lg:leading-[26px] lg:tracking-[-0.01em]">
          all we need from you is your quest to break things and obsession to
          solve problems. join the waitlist and we will send you an email before
          we publicly open up applications
        </p>
      </div>

      <div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-fit mx-auto flex flex-col mt-[50px]  gap-[21px]"
        >
          <div className="flex flex-row items-center gap-[10px]">
            <fieldset>
              <input
                name="email"
                type="email"
                placeholder="email address"
                className={clsx(
                  validEmail(email)
                    ? "border-primary-100 text-main-100"
                    : "border-[#232328] focus:border-[#A8A5C0] text-[#A8A5C0]",
                  "w-[310px] lg:w-[360px] outline-none transition-all duration-300 border-[1px] bg-dark rounded-[10px] px-[20px] py-[12.5px] placeholder:text-[#A8A5C0] font-clash text-[15px] font-normal lg:leading-[24px] lg:tracking-[-0.15px]"
                )}
                value={email}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <input
                type="text"
                name="cityCountry"
                placeholder="city, country"
                className={clsx(
                  validEmail(email)
                    ? "border-primary-100 text-main-100"
                    : "border-[#232328] focus:border-[#A8A5C0] text-[#A8A5C0]",
                  "w-[310px] lg:w-[360px] outline-none transition-all duration-300 border-[1px] bg-dark rounded-[10px] px-[20px] py-[12.5px] placeholder:text-[#A8A5C0] font-clash text-[15px] font-normal lg:leading-[24px] lg:tracking-[-0.15px]"
                )}
                value={cityCountry}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <fieldset>
            <Button
              disabled={isDisabled}
              loading={loading}
              className="w-full text-center mx-auto block"
            >
              join the waitlist
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
