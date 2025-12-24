import { message } from "@/lib/messages";
import { Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom"; // or import Link from "next/link" if using Next.js

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <SearchX className="w-24 h-24 text-black/80" />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {message.status}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            {message.pageNotFound}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {message.sorryText}
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            <Home className="w-5 h-5" />
            {message.retrunHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
