import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HistorySection } from "@/components/HistorySection";
import { GeographySection } from "@/components/GeographySection";
import { FamiliesSection } from "@/components/FamiliesSection";
import { InstitutionsSection } from "@/components/InstitutionsSection";
import { GallerySection } from "@/components/GallerySection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <GeographySection />
        <FamiliesSection />
        <InstitutionsSection />
        <GallerySection />
        {/*<RegistrationSection />*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
