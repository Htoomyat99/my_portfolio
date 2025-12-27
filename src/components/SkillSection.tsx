import { cn } from "@/lib/utils";
import type { SkillType } from "@/type";
import { useState } from "react";

const skills: SkillType[] = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 40, category: "backend" },
  { name: "Express", level: 40, category: "backend" },
  { name: "MongoDB", level: 40, category: "backend" },
  { name: "PostgreSQL", level: 40, category: "backend" },
  { name: "Java", level: 40, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },

  //Mobile
  { name: "React Native", level: 90, category: "mobile" },
  { name: "Flutter", level: 40, category: "mobile" },
];

const categorys: string[] = ["all", "frontend", "backend", "mobile", "tools"];

export default function SkillSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categorys.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-primary-foreground/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-sm md:text-lg">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-shadow-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
