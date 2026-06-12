import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import aboutImage from "@/assets/about.webp";
import heroVideo from "@/assets/WhatsApp Video 2026-01-18 at 23.50.31.mp4";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="heading-section text-foreground mb-6">
              A Place for Every Moment
            </h2>
            <div className="divider-subtle mb-8 mx-0" />
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                By day, we're your cozy escape for artisan coffee and wholesome brunch. 
                The morning sun filters through our windows as you savor that first sip, 
                lost in conversation or a good book.
              </p>
              <p>
                As evening falls, Road House transforms. The lights dim, cocktails flow, 
                and the energy shifts. We become the backdrop for first dates, celebrations, 
                and those spontaneous nights that turn into stories.
              </p>
              <p className="text-foreground font-medium">
                Whether it's a morning meeting, an afternoon hangout, or a late-night toast — 
                this is where good times roll.
              </p>
            </div>
          </motion.div>
          
          {/* Image with Video Play Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              <img
                src={aboutImage}
                alt="Friends enjoying time at Road House Café"
                className="relative rounded-2xl shadow-elevated w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-elevated group-hover:bg-primary transition-all duration-300"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </motion.button>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-serif text-lg">
                Est. 2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-full rounded-2xl shadow-elevated object-cover"
                src={heroVideo}
                autoPlay
                controls
                playsInline
              />
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 p-2 text-cream hover:text-gold transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
