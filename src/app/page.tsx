import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
