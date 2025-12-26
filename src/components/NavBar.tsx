import { message } from "@/lib/messages";
import { cn } from "@/lib/utils";
import type { NavItemType } from "@/type";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems: NavItemType[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

interface NavBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function NavBar({ isDarkMode, setIsDarkMode }: NavBarProps) {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.screenY > 10);

      const scrollPosition = window.scrollY + 100;

      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveHref(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateSections = () => {
      sectionsRef.current = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as HTMLElement[];
    };

    // Small delay to ensure all sections are rendered
    const timer = setTimeout(updateSections, 100);

    // Also update on route changes or component updates
    window.addEventListener("load", updateSections);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", updateSections);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="flex items-center justify-between px-5">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">
              {message.firstName}
            </span>{" "}
            {message.portfolio}
          </span>
        </a>

        {/* desktop nav */}
        <div className="flex-row items-center hidden md:flex gap-5">
          <div className="space-x-8">
            {navItems.map((nav, key) => (
              <a
                onClick={() => setActiveHref(nav.href)}
                key={key}
                href={nav.href}
                className="text-foreground/80 hover:scale-110 hover:text-primary transition-colors duration-300"
                style={{
                  textDecoration:
                    nav.href === activeHref ? "underline" : "none",
                }}
              >
                {nav.name}
              </a>
            ))}
          </div>

          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <button
            className="px-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((nav, key) => (
              <a
                key={key}
                href={nav.href}
                className={`text-foreground/80 cursor-pointer ${
                  nav.href === activeHref
                    ? "text-primary underline"
                    : "text-foreground/80"
                }  `}
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
