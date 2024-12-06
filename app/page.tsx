import { Hero, Forge, Features, Recent, Incubator } from "./components/home";

export default function Home() {
  return (
    <main className="relative z-[100] flex flex-col items-center mx-[22px] lg:mx-[222px]">
      <Hero />
      <Features />
      <Recent />
      <Incubator />
      <Forge />
    </main>
  );
}
