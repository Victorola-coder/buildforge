import { Hero, Forge, Recent } from "./components/home";

export default function Home() {
  return (
    <main className="relative z-[100]">
      {" "}
      {/* Ensure this is higher than -1 */}
      <Hero />
      <Recent />
      <Forge />
    </main>
  );
}
