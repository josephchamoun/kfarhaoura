import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kfarhaoura.jpg";
import church from "@/assets/church.jpg";
import { useState } from "react";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNavClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsMobileMenuOpen(false);
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${church})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/70 via-stone-dark/50 to-stone-dark/80" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream mb-6">
            <MapPin size={16} />
            <span className="text-sm font-medium">
              Zgharta District, North Lebanon
            </span>
          </div>

          {/* Arabic Title */}
          <h1 className="font-amiri text-6xl md:text-8xl lg:text-9xl text-cream text-shadow-hero mb-4">
            كفرحورا
          </h1>

          {/* English Title */}
          <h2 className="font-outfit text-2xl md:text-3xl lg:text-4xl text-cream/90 font-light tracking-wide mb-6">
            Kfarhaoura
          </h2>

          {/* Subtitle */}
          <p className="font-amiri text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            قرية لبنانية تحتضن التراث والطبيعة الخلابة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              id="explore-town"
              variant="hero"
              size="xl"
              onClick={() => handleNavClick("#about")}
            >
              Explore the Town
            </Button>

            {/*
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#register">Join Community</a>
            </Button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
