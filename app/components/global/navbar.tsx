"use client";

import Link from "next/link";
import { Button } from "../ui";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/logo.svg";

export default function Navbar() {
  const links: LinksProps[] = [
    {
      name: "products",
      href: "/products",
    },
    {
      name: "episodes",
      href: "/episodes",
    },
  ];
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <header className="mx-[22px] py-[37px] md:py-[44px] md:mx-[122px]">
      <nav className="bg-[#0D0D11] border-[2px] border-[#232328] py-[10px] px-[15px] rounded-[12px] md:py-0 md:px-0 md:rounded-[59px] md:pl-[20px] md:pr-[13px] md:flex md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-row gap-1.5 md:gap-[10px] items-center"
          id="logo"
        >
          <Image src={logo} alt="logo" className="w-[20.326px] md:w-full" />
          <h3 className="text-[#EEEEEE] text-[20px] leading-[48px] font-medium font-satMed md:leading-[81.6px] tracking-tight md:text-[24px]">
            buildforge
          </h3>
        </div>

        <div className="hidden md:flex flex-row items-center">
          <ul>
            <li className="flex flex-row gap-2">
              {links.map((link) => (
                <Link href={link.href} key={link.name}>
                  <h5 className="text-main-100 leading-normal font-clash w-[100px] text-[18px] py-[8.5px] px-[14.5px] border border-[#232328]  md:rounded-[100px]">
                    {link.name}
                  </h5>
                </Link>
              ))}
            </li>
          </ul>

          <button className="bg-primary rounded-[30px] px-[20px] py-[12.5px] text-white font-medium text-[18px] leading-normal font-clashMed">
            join the buildforge
          </button>
        </div>

        {/* mobile nav */}
        <div className="flex flex-row items-center gap-5 md:hidden">
          <div className="md:hidden">
            <div className="">
              <button
                className="space-y-1.5 focus:outline-none_ focus:ring_ focus:ring-[#111111]/60_ p-1 pb-1.5 rounded-md"
                onClick={() => setIsOpened(!isOpened)}
              >
                <div
                  className={`rounded-full h-1 bg-[#111111] transition-all duration-300 ${
                    isOpened
                      ? "w-[30px] rotate-45 translate-y-3.5"
                      : "w-3 rotate-0 translate-x-0"
                  }`}
                />
                <div
                  className={`rounded-full h-1 bg-[#111111] w-[30px] translate-x-[8px]_ transition-all duration-300  ${
                    isOpened ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`rounded-full h-1 bg-[#111111] self-end transition-all duration-300 ${
                    isOpened
                      ? "w-[30px] -rotate-45 -translate-y-1.5"
                      : "w-3 translate-x-[16px] rotate-0"
                  }`}
                />
              </button>
              <div>
                <div
                  className={`z-[100] min-h-[330px] w-full border-b absolute bg-white px-[26px] py-[28px]block  mt-[60px] md:hidden transition-all duration-300 ${
                    isOpened ? "-translate-y-[50px]" : "-translate-y-[200%]"
                  } pt-4 left-0 right-0`}
                >
                  <div className="px-3_ mx-auto">
                    <ul className="flex flex-col items-start space-y-2">
                      <li>
                        <Link href={"/"} target={""}>
                          <h4 className="text-[#F3EFFD] text-[18px] leading-[48px] font-clash">
                            products
                          </h4>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    onClick={() => setIsOpened(!isOpened)}
                    className="px-5 mx-auto"
                  >
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfvqBf6G9xI_CbEUrx7hmIex6bklVXTX5Pe-WN88zdntt_KUg/viewform"
                      target="_blank"
                      className="md:inline-block"
                    >
                      <Button className="bg-[#FF6899] !w-[201px] whitespace-nowrap !rounded-[30px]">
                        Start your relocation
                      </Button>
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
