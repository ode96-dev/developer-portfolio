import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
    </div>
  );
}
