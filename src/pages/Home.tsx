import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
    </div>
  );
}
