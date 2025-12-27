import { message } from "@/lib/messages";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10 text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center animate-fade-in mb-2">
          <img
            src="/me.png"
            alt="Background"
            className="w-24 h-24 xl:w-52 xl:h-56 object-cover border-2 border-white"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{message.hi}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              {message.firstName}
            </span>
            <span className="opacity-0 animate-fade-in-delay-2">
              {" "}
              {message.lastName}
            </span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {message.heroDescription}
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {message.viewMyWork}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm mb-2">{message.scroll}</span>

        <ChevronDown className="h-5 w-5 text-primary cursor-pointer" />
      </a>
    </section>
  );
}
