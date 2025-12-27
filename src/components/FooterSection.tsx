import { message } from "@/lib/messages";
import { ChevronUp } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-xs md:text-sm text-shadow-foreground">
        {" "}
        {message.copyright(new Date().getFullYear())}
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transform-colors"
      >
        <ChevronUp size={20} />
      </a>
    </footer>
  );
}
