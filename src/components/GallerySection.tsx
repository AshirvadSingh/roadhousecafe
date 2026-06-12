import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
import gallery from "@/assets/gallery.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";
import gallery5 from "@/assets/gallery5.jpeg";
import gallery6 from "@/assets/gallery6.jpeg";
import gallery7 from "@/assets/gallery7.jpeg";
import gallery8 from "@/assets/gallery8.jpeg";
import gallery9 from "@/assets/gallery9.jpeg";


const galleryImages = [
  { src: gallery, alt: "Café interior with natural light", category: "Interior" },
  { src: gallery2, alt: "Bar counter with premium spirits", category: "Bar" },
  { src: gallery3, alt: "Delicious brunch spread", category: "Food" },
  { src: gallery4, alt: "Evening party celebration", category: "Events" },
  { src: gallery5, alt: "Barista creating latte art", category: "Coffee" },
  { src: gallery6, alt: "Cozy velvet booth seating", category: "Interior" },
  { src: gallery7, alt: "Friends enjoying their time", category: "Ambience" },
  { src: gallery8, alt: "Cozy lounge area", category: "Interior" },
  { src: gallery9, alt: "Delicious cocktails", category: "Drinks" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-background" ref={ref}>
        <div className="container-content">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Space
            </span>
            <h2 className="heading-section text-foreground mb-4">
              A Glimpse Inside
            </h2>
            <div className="divider-subtle" />
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group
                  ${index === 0 || index === 5 ? "row-span-2" : ""}
                  ${index === 3 ? "col-span-2 md:col-span-1" : ""}
                `}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ minHeight: index === 0 || index === 5 ? "400px" : "200px" }}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end">
                  <span className="text-cream font-sans text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 text-cream/80 hover:text-cream transition-colors z-10 p-2"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-cream/80 text-center mt-4 font-sans">
                {galleryImages[selectedIndex].alt}
              </p>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 text-cream/80 hover:text-cream transition-colors z-10 p-2"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 font-sans text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
