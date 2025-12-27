import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

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
          <button
            onClick={() => handleFooterClick("#")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Home
          </button>
          <button
            onClick={() => handleFooterClick("#about")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            About
          </button>
          <button
            onClick={() => handleFooterClick("#history")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            History
          </button>
          <button
            onClick={() => handleFooterClick("#families")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Families
          </button>
          <button
            onClick={() => handleFooterClick("#gallery")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Gallery
          </button>
          <button
            onClick={() => handleFooterClick("#contact")}
            className="text-cream/70 hover:text-cream transition-colors text-sm"
          >
            Contact
          </button>
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
