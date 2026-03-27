import Footer from "@/components/layout/footer";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen pb-[100vh]">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
