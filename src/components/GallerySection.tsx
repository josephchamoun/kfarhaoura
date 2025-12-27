import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/whole-town.jpg";
import churchImage from "@/assets/churchview.jpg";
import house from "@/assets/house.jpg";
import marelias from "@/assets/marelias.jpg";
import pinetrees from "@/assets/pinetrees.jpg";
import townhall from "@/assets/townhall.jpg";
import waterfall from "@/assets/nafoora.jpg";
import landscape from "@/assets/landscape.jpg";

const galleryImages = [
  { src: heroImage, title: "إطلالة البلدة ", english: " Town View" },
  { src: churchImage, title: "الكنيسة التاريخية", english: "Historic Church" },
  {
    src: house,
    title: "منزل تقليدي ",
    english: "Historic House",
  },
  {
    src: marelias,
    title: "مار سركيس و باخوس",
    english: "Saint Sarkis and Bakhos",
  },
  {
    src: pinetrees,
    title: "أشجار الصنوبر",
    english: "Pine Trees",
  },
  { src: townhall, title: "قاعة الرعية", english: "Town Hall" },
  { src: waterfall, title: " نبع المياه", english: "Water Spring" },
  { src: landscape, title: "منظر طبيعي", english: "Landscape View" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            معرض الصور
          </h2>
          <p className="text-muted-foreground text-lg">Photo Gallery</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[8/9] rounded-xl overflow-hidden shadow-soft card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-amiri text-lg text-cream">{image.title}</h3>
                <p className="text-cream/70 text-sm">{image.english}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-stone-dark/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
            >
              <X size={24} />
            </button>
            <div
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-dark/90 to-transparent rounded-b-lg">
                <h3 className="font-amiri text-xl text-cream">
                  {selectedImage.title}
                </h3>
                <p className="text-cream/70">{selectedImage.english}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
