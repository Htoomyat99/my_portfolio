import { message } from "@/lib/messages";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/services/apiServices";
import type {
  ContactInfoType,
  FormDataType,
  FormInputType,
  SendMessageParameter,
  SocialMediaType,
} from "@/type";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import FormINputComponent from "./FormInputComponent";

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

const FormInputs: FormInputType[] = [
  { id: "name", field: message.yourName, placeholder: message.namePlaceholder },
  {
    id: "email",
    field: message.yourEmail,
    placeholder: message.emailPlaceholder,
  },
  {
    id: "message",
    field: message.yourMessage,
    placeholder: message.messagePlaceholder,
  },
];

const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const user_id = import.meta.env.VITE_PUBLIC_KEY;

const linkedinLink = import.meta.env.VITE_LINKEDN_LINK;
const facebookLink = import.meta.env.VITE_FACEBOOK_LINK;
const instagramLink = import.meta.env.VITE_INSTAGRAM_LINK;

const socaialMedia: SocialMediaType[] = [
  { id: 1, icon: <Linkedin />, href: linkedinLink },
  { id: 2, icon: <Facebook />, href: facebookLink },
  { id: 3, icon: <Instagram />, href: instagramLink },
  { id: 4, icon: <Send />, href: "#contact" },
];

const telegramUserName = import.meta.env.VITE_TELEGRAM_USERNAME;
const telegramGreetingmessage = encodeURIComponent(message.teleMessage);

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const data: SendMessageParameter = {
      service_id,
      template_id,
      user_id,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Htoo Myat Lwin",
        message: formData.message,
      },
    };

    await sendEmail(data);
    setIsLoading(false);
  };

  const openTelegram = () => {
    const appLink = `tg://resolve?domain=${telegramUserName}&text=${telegramGreetingmessage}`;
    const webLink = `https://t.me/${telegramUserName}?text=${telegramGreetingmessage}`;

    // Try opening Telegram App
    window.location.href = appLink;

    // Fallback to Telegram Web
    setTimeout(() => {
      window.open(webLink, "_blank");
    }, 500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get <span className="text-primary">In Touch</span>
        </h2>

        <p className="text-center text-shadow-foreground mb-12 max-w-2xl mx-auto">
          {message.contactDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-12">
              {message.contactInfo}
            </h3>

            {contactInfos.map((info) => {
              const href =
                info.id === 1
                  ? `mailto:${info.detail}`
                  : info.id === 2
                  ? `tel:${info.detail}`
                  : undefined;

              return (
                <div
                  key={info.id.toString()}
                  className="space-y-6 justify-center"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 ">
                      {info.icon}
                    </div>
                    <div className="flex flex-col items-start">
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
              <h4 className="font-medium mb-4">{message.connectWithMe}</h4>

              <div className="flex space-x-4 justify-center">
                {socaialMedia.map((media) => (
                  <a
                    key={media.id.toString()}
                    href={media.id === 4 ? undefined : media.href}
                    target="_blank"
                    className="hover:text-primary hover:scale-110 cursor-pointer"
                    onClick={media.id === 4 ? openTelegram : undefined}
                  >
                    {media.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {message.sendAMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {FormInputs.map((input) => (
                <FormINputComponent
                  key={input.id}
                  input={input}
                  value={formData[input.id] || ""}
                  onChange={handleInputChange}
                />
              ))}

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isLoading ? (
                  <div className="w-4 h-4 my-1 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    {message.sendMessage}
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
