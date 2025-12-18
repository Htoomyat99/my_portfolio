import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import SkillSection from "@/components/SkillSection";
import StarBackground from "@/components/StarBackground";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      <StarBackground />

      <NavBar />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillSection />
      </main>
    </div>
  );
}
