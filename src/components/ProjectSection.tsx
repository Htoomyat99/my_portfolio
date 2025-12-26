import { message } from "@/lib/messages";
import type { ProjectType } from "@/type";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Wordle Game Clone",
    description:
      "A fun and interactive mobile game where players must guess the correct word based on image hints.",
    image: "/projects/wordle.jpeg",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Clerk",
      "Firebase",
      "React Native MMKV ",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Htoomyat99/wordle",
  },
  {
    id: 2,
    title: "Pokemon Cards Collection",
    description:
      "Allows users to browse and manage their Pokémon card collection with search, filter and view detials.",
    image: "/projects/pokemon.jpeg",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "Expo Router",
      "TanStack Query",
      "React Native MMKV",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Htoomyat99/Pokemon",
  },
  {
    id: 3,
    title: "Food Ordering App",
    description:
      "Users can browse the food menu, view item details, add items to the cart, place orders, update profiles, switch languages, and change dark mode.",
    image: "/projects/flavorBite.jpeg",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "Expo Router",
      "Superbase",
      "React Hook Form",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Htoomyat99/FlavorBite",
  },
  {
    id: 4,
    title: "Music Player App",
    description:
      "Users can explore a list of songs, view favorites, playlists, and artists, see song details, and enjoy music playback, even in the background.",
    image: "/projects/music.jpeg",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "Expo Router"],
    demoUrl: "#",
    githubUrl: "https://github.com/Htoomyat99/music-player",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Using data from the (TMDB) API. Users can explore trending and top-rated movies, search for titles, and manage their favorite movies.",
    image: "/projects/movie.jpeg",
    tags: [
      "React Native",
      "Expo",
      "JavaScript",
      "Redux Toolkit",
      "React Navigation",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Htoomyat99/Movie_App",
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
          {message.projectDescription}
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
                      href={projcet.githubUrl}
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
            {message.checkMyGitHub} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
