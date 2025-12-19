import type { ProjectType } from "@/type";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-shadow-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on any
          project to learn more about it. Each project showcases my skills in
          web development, design, and problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projcet, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projcet.image}
                  alt={projcet.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projcet.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{projcet.title}</h3>
                <p className="text-shadow-foreground text-sm mb-4">
                  {projcet.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projcet.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={projcet.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/htoomyat99"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
