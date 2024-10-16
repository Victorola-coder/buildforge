import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Navbar() {
  return (
    <header className="md:py-[44px] md:mx-[122px]">
      <nav className="bg-[#0D0D11] border-[2px] border-[#232328] md:rounded-[59px] md:p-[20px] md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row gap-[10px] items-center" id="logo">
          <Image src={logo} alt="logo" />
          <h3 className="text-[#EEEEEE] font-satMed leading-[81.6px] tracking-tight text-[24px]">
            buildforge
          </h3>
        </div>
      </nav>
    </header>
  );
}
