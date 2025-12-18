import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
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
      </main>
    </div>
  );
}
