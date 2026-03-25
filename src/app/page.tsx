import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Hero />
      <About />
    </div>
  );
}
