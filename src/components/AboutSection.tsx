import type { AboutItemsType } from "@/type";
import { Briefcase, Code, User } from "lucide-react";

const AboutItems: AboutItemsType[] = [
  {
    id: 1,
    title: "Web Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    description:
      "I specialize in building modern, responsive, and user-friendly websites using the latest web technologies.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <User className="h-6 w-6 text-primary" />,
    description:
      "I create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    id: 3,
    title: "Project Management",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description:
      "I manage projects effectively, ensuring timely delivery and meeting client expectations. I collaborate closely with clients to understand their needs and deliver high-quality results.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creater
            </h3>

            <p className="text-shadow-foreground">
              I am a passionate web developer and tech creator with a strong
              commitment to creating user-friendly and visually appealing
              websites. With a keen eye for design and a deep understanding of
              web technologies.
            </p>

            <p className="text-shadow-foreground">
              I bring a unique blend of creativity and technical expertise to
              every project I undertake, resulting in visually stunning and
              highly functional websites. I am dedicated to staying up-to-date
              with the latest industry trends and technologies to deliver
              cutting-edge solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {AboutItems.map((item) => (
              <div
                key={item.id.toString()}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4 ">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-shadow-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
