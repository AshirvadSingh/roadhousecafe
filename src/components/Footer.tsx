import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-4">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="font-serif text-3xl mb-4">Road House</h3>
          <p className="text-cream/60 font-sans text-lg mb-8">
            Café & Bar
          </p>
          
          {/* Tagline */}
          <p className="font-serif text-xl italic text-gold mb-8">
            "Let the Good Times Roll"
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://instagram.com/roadhouse_greaternoida"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center
                       hover:bg-cream/20 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center
                       hover:bg-cream/20 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center
                       hover:bg-cream/20 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-sans">
            <a href="#about" className="text-cream/60 hover:text-cream transition-colors">
              About
            </a>
            <a href="#cuisine" className="text-cream/60 hover:text-cream transition-colors">
              Menu
            </a>
            <a href="#testimonials" className="text-cream/60 hover:text-cream transition-colors">
              Reviews
            </a>
            <a href="#location" className="text-cream/60 hover:text-cream transition-colors">
              Location
            </a>
            <a href="#reservations" className="text-cream/60 hover:text-cream transition-colors">
              Reservations
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-cream/20 mx-auto mb-8" />
          
          {/* Copyright */}
          <p className="text-cream/40 text-sm font-sans">
            © {new Date().getFullYear()} Road House Café & Bar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
