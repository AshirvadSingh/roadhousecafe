import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

const ReelsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Inject Elfsight script once
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reels" ref={ref} className="section-padding bg-charcoal">
      
      {/* Header */}
      <div className="container-content mb-12 px-4 text-center">
        <span className="text-gold text-sm tracking-[0.2em] uppercase block mb-4">
          Follow the Vibe
        </span>
        <h2 className="heading-section text-cream mb-4">
          Reels That Roll the Mood
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto" />
      </div>

      {/* 🔥 Elfsight Feed */}
      <div className="px-4 md:px-8">
        <div
          className="elfsight-app-8d6a254f-3cf0-4c38-b32f-0b7c19edf794"
          data-elfsight-app-lazy
        ></div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mt-10"
      >
        <a
          href="https://instagram.com/roadhouse_greaternoida"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-cream/10 hover:bg-cream/20 text-cream px-6 py-3 rounded-full border border-cream/20"
        >
          <Instagram className="w-5 h-5" />
          @roadhouse_greaternoida
        </a>
      </motion.div>
    </section>
  );
};

export default ReelsSection;