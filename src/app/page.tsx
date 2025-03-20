import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExpertiseSection } from "@/sections/Skills";
import { TapeSection } from "@/sections/Tape";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ExpertiseSection />
      <AboutSection />
    </div>
  );
}
