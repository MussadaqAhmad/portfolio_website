import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionBridge from "@/components/section-bridge";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionBridge
        label="Selected work"
        hint="Apps shipped end-to-end — from architecture to App Store."
      />
      <Projects />
      <SectionBridge
        label="Craft & stack"
        hint="The tools I reach for when performance and polish both matter."
      />
      <Skills />
      <SectionBridge
        label="Career path"
        hint="From contributing to leading — mobile products for global teams."
      />
      <Experience />
      <SectionBridge
        label="Let's talk"
        hint="Have a product in mind? I'd love to hear about it."
      />
      <Contact />
    </main>
  );
}
