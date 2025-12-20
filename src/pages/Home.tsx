import AboutSection from "@/components/AboutSection";
import CloudBackground from "@/components/CloudBackground";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {isDarkMode ? <StarBackground /> : <CloudBackground />}

      <NavBar />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillSection />

        <ProjectSection />

        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
