/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function ThemeToggle({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleProps) {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const dark = stored === "dark" || (!stored && systemDark);

    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;

    setIsDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 md:h-6 w-5 md:w-6 text-yellow-300 cursor-pointer" />
      ) : (
        <Moon className="h-5 md:h-6 w-5 md:w-6 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
}
