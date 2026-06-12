import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CuisineSection from "@/components/CuisineSection";
import ReelsSection from "@/components/ReelsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import VideoCTASection from "@/components/VideoCTASection";
import HomeSeoLinksSection from "@/components/HomeSeoLinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Handle smooth scroll to section from URL hash
  useEffect(() => {
    if (!isLoading && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location, isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="overflow-hidden scroll-smooth cursor-none">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <CuisineSection />
          <VideoCTASection />
          <ReelsSection />
          <GallerySection />
          <TestimonialsSection />
          <LocationSection />
          <ContactSection />
          <HomeSeoLinksSection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
