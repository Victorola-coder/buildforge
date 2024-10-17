import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center w-full">
      <h3 className="text-main-100 transition-all duration-300 hover:text-white hover:bg-primary/10 leading-normal font-clash text-[15px] md:text-[18px] md:py-[8.5px] md:px-[18.5px] border border-[#232328] md:rounded-[100px]">
        built with a big red heart by{" "}
        <span className="text-primary">
          <Link href="https://victorola.me" className="!capitalize" target="_blank">
            VickyJay
          </Link>
        </span>
      </h3>
    </footer>
  );
}
