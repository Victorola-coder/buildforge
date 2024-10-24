"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/legacy/image";
import logo from "@/public/images/logo.svg";

export default function Navbar() {
  const links: LinksProps[] = [
    {
      name: "episodes",
      href: "/episodes",
    },
  ];
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <header className="mx-[22px] py-[37px] md:py-[44px] md:mx-[222px]">
      <nav className="bg-[#0D0D11] border-[2px] border-[#232328] py-[7px] px-[15px] rounded-[12px] md:py-0 md:px-0 md:rounded-[59px] md:pl-[20px] md:pr-[13px] flex flex-row items-center justify-between">
        <div
          className="flex flex-row gap-1.5 md:gap-[10px] items-center group"
          id="logo"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[20.326px] md:w-full group-hover:-rotate-[20deg] transition-all duration-300"
          />
          <h3 className="text-[#EEEEEE] group-hover:text-primary transition-all duration-300 text-[20px] leading-[48px] font-medium font-satMed md:leading-[81.6px] tracking-tight md:text-[24px]">
            buildforge
          </h3>
        </div>

        <div className="hidden md:flex flex-row gap-3.5 items-center">
          <ul>
            <li className="flex flex-row gap-2">
              {links.map((link) => (
                <Link href={link.href} key={link.name}>
                  <h5 className="text-main-100 transition-all duration-300 hover:text-primary-100 active:shadow-primary active:bg-[#8066FF26] hover:border-primary-100 leading-normal font-clash text-[18px] py-[8.5px] px-[18.5px] border-[1.516px] border-solid border-[#312E49] rounded-[100px]">
                    {link.name}
                  </h5>
                </Link>
              ))}
            </li>
          </ul>

          <Link
            href="https://chat.whatsapp.com/LrGkqCkEUkoDFg8UVKuZD4"
            target="_blank"
          >
            <button className="bg-primary hover:bg-primary-100 active:bg-primary-200 active:shadow-primary transition-all duration-300 active:bg-primary/80 active:scale-95 rounded-[30px] px-[20px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed">
              join the buildforge
            </button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="flex flex-row items-center gap-5 md:hidden">
          <div className="md:hidden">
            <div className="">
              <button
                className="space-y-1.5 group rounded-[12px] border border-solid border-[#232328] px-[12px] py-[12px]"
                onClick={() => setIsOpened(!isOpened)}
              >
                <div
                  className={clsx(
                    "rounded-full h-0.5 bg-[#FEFEFE] group-hover:bg-main transition-all duration-300",
                    isOpened
                      ? "w-[30px] rotate-45 translate-y-2.5"
                      : "w-[30px] rotate-0 translate-x-0"
                  )}
                />
                <div
                  className={clsx(
                    "rounded-full h-0.5 bg-[#FEFEFE] group-hover:bg-main transition-all duration-300",
                    isOpened ? "opacity-0" : "opacity-100"
                  )}
                />
                <div
                  className={clsx(
                    "rounded-full h-0.5 bg-[#FEFEFE] group-hover:bg-main transition-all duration-300",
                    isOpened
                      ? "w-[30px] -rotate-45 -translate-y-[5px]"
                      : "w-[30px] rotate-0"
                  )}
                />
              </button>
              <div>
                <div
                  className={clsx(
                    "z-[100] min-h-[100px] mx-[22px]_ border-b absolute bg-dark px-[26px] py-[28px] block  mt-[60px] md:hidden transition-all duration-300",
                    isOpened ? "-translate-y-[50px]" : "-translate-y-[250%]",
                    "pt-4 left-0 right-0"
                  )}
                >
                  <div className="flex flex-col gap-2">
                    <ul>
                      <li onClick={() => setIsOpened(!isOpened)}>
                        <Link href="/episodes">
                          <h4 className="text-[#F3EFFD] text-[18px] leading-[48px] font-clash">
                            episodes
                          </h4>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      href="https://chat.whatsapp.com/LrGkqCkEUkoDFg8UVKuZD4"
                      target="_blank"
                      onClick={() => setIsOpened(!isOpened)}
                      className="md:inline-block"
                    >
                      <button className="bg-primary hover:bg-primary-100 active:bg-primary-200 active:shadow-primary transition-all duration-300 active:scale-95 rounded-[10px] px-[21px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed">
                        join the buildforge
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
