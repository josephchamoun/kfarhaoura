import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Geography", href: "#geography" },
  { label: "Families", href: "#families" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 bg-none border-none cursor-pointer"
        >
          <span
            className={cn(
              "font-amiri text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-primary" : "text-cream"
            )}
          >
            كفرحورا
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 bg-none border-none cursor-pointer",
                isScrolled
                  ? "text-foreground hover:bg-primary/10 hover:text-primary"
                  : "text-cream/90 hover:bg-cream/10 hover:text-cream"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "lg:hidden",
            isScrolled ? "text-foreground" : "text-cream"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* MOBILE NAV MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium text-left bg-none border-none cursor-pointer w-full"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
