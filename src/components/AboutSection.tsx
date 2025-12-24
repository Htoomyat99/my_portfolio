import { message } from "@/lib/messages";
import type { AboutItemsType } from "@/type";
import { Briefcase, Code, User } from "lucide-react";

const AboutItems: AboutItemsType[] = [
  {
    id: 1,
    title: message.webDevelopment,
    icon: <Code className="h-6 w-6 text-primary" />,
    description: message.webDevelopmentDescription,
  },
  {
    id: 2,
    title: message.mobileDevelopment,
    icon: <User className="h-6 w-6 text-primary" />,
    description: message.mobileDevelopmentDescription,
  },
  {
    id: 3,
    title: message.uiUxDesign,
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description: message.uiUxDesignDescription,
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
            <h3 className="text-2xl font-semibold">{message.aboutMeTitle}</h3>

            <p className="text-shadow-foreground">
              {message.aboutMeDescription1}
            </p>

            <p className="text-shadow-foreground">
              {message.aboutMeDescription2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {message.getInTouch}
              </a>

              <a
                href="./htoomyatlwin_cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                {message.downloadCV}
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
