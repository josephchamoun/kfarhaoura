import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-dark py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <h3 className="font-amiri text-3xl text-cream mb-2">كفرحورا</h3>
          <p className="text-cream/60">Kfarhaoura, North Lebanon</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#home"
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            About
          </a>
          <a
            href="#history"
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            History
          </a>
          <a
            href="#families"
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Families
          </a>
          <a
            href="#gallery"
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Gallery
          </a>
          {/*<a href="#register" className="text-cream/70 hover:text-cream transition-colors text-sm">
            Register
          </a>*/}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-cream/50 text-sm">
          <span>© {currentYear} Kfarhaoura. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> for our
            community
          </span>
        </div>
      </div>
    </footer>
  );
}
