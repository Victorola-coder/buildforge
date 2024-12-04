import { Hero, Forge, Features, Recent } from "./components/home";

export default function Home() {
  return (
    <main className="relative z-[100]">
      <Hero />
      <Features />
      <Recent />
      <Forge />
    </main>
  );
}
