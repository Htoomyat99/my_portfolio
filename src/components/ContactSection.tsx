import { cn } from "@/lib/utils";
import type { ContactInfoType } from "@/type";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactInfos: ContactInfoType[] = [
  {
    id: 1,
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    detail: "htoomyat.20399@gmail.com",
  },
  {
    id: 2,
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    detail: "+95 9 769 706 139",
  },
  {
    id: 3,
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location",
    detail: "Yangon, Myanmar",
  },
];

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get <span className="text-primary">In Touch</span>
        </h2>

        <p className="text-center text-shadow-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out! I'm always open to discussing new opportunities, collaborations,
          or answering any questions you may have. Let's connect and create
          something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {contactInfos.map((info) => {
              const href =
                info.id === 1
                  ? `mailto:${info.detail}`
                  : info.id === 2
                  ? `tel:${info.detail}`
                  : undefined;

              return (
                <div className="space-y-6 justify-center">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 ">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a
                        href={href}
                        className="text-shadow-foreground hover:text-primary transition-colors"
                      >
                        {info.detail}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>

                <a href="#" target="_blank">
                  <Facebook />
                </a>

                <a href="#" target="_blank">
                  <Instagram />
                </a>

                <a href="#" target="_blank">
                  <Send />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe ..."
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to ..."
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
