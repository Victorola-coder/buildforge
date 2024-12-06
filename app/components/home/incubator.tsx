import clsx from "clsx";
import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Incubator() {
  return (
    <section className="mt-[60px]">
      <div className="flex flex-col items-center gap-[44px] justify-center bg-[#0D0D11] border-[1.5px] border-[#312E4999] rounded-[26px] p-[32px]">
        <p className="text-[#E1DEF0] font-bold font-satBold text-[48px] text-center max-w-[564px] leading-[54px] tracking-[-0.04em]">
          we are not an incubator program
        </p>
        <small className="font-clash font-normal text-[22px] max-w-[794px] leading-[32px] tracking-[-0.01em] text-center">
          or a startup program that focus on preparing builders for investors,
          we will help you build, test, and launch their ideas, even if they’re
          not perfect at first. Forghaus is about execution, not perfection.
        </small>
        <Image src={hero} alt="image" draggable={false} loading="lazy" />
      </div>

      {/*  */}

      <div className="mt-6 space-y-4 *:flex *:flex-row *:items-center *:gap-[20px]">
        <div>
          <Incubtns>supportive community</Incubtns>
          <Incubtns>open workspace to seat 50 builders</Incubtns>
          <Incubtns>studio to shoot your podcast or video content</Incubtns>
        </div>
        <div>
          <Incubtns>hardware lab to build robots and gadgets</Incubtns>
          <Incubtns>gaming room for relaxation and fun</Incubtns>
          <Incubtns>light snacks to keep you running</Incubtns>
        </div>
      </div>
    </section>
  );
}

interface IBtnProps {
  className?: string;
  children: React.ReactNode;
}

const Incubtns = ({ children, className }: IBtnProps) => {
  return (
    <button
      className={clsx(
        className,
        "bg-[#141414] py-[17px] px-[20px] whitespace-nowrap rounded-[100px] border-[#232328] border-[2px] border-solid text-[#E1DEF0] text-[18px] font-normal leading-[32px] tracking-[0.01em] text-center"
      )}
    >
      {children}
    </button>
  );
};
