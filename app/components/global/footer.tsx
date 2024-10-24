import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center w-full mb-[21px] mt-[51px] md:mb-[35px] md:mt-[78px]">
      <Link href="https://victorola.me" target="_blank">
        <h3 className="group text-main-100 active:scale-[105] active:bg-[#8066FF26] hover:border-primary-100 rounded-[100px] px-[18px] py-[3px] transition-all duration-300 leading-normal font-clash text-[15px] md:py-[8.5px] md:px-[18.5px] border border-[#232328]">
          built with a big red heart by{" "}
          <span className="transition-all duration-300">VickyJay</span>
        </h3>
      </Link>
    </footer>
  );
}
