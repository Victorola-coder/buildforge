import { Hero, Forge, Recent } from "./components/home";

export default function Home() {
  return (
    <main className="relative z-[1000000]">
      <Hero />
      <Recent />
      <Forge />
    </main>
  );
}
