import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/WhatsApp Video 2026-01-18 at 23.50.31.mp4";


const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypingText = ({
  text,
  className = "",
  delay = 0,
  speed = 0.04
}: TypingTextProps) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Premium Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-ivory/80 
        via-ivory/50 
        to-charcoal/70" 
      />

      {/* Floating Decorative SVG Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Coffee Cup SVG - Top Left */}
        <motion.svg
          style={{ y: y1, rotate: rotate1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-20 left-10 w-32 h-32 text-gold"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M20 30 L20 70 Q20 85 35 85 L65 85 Q80 85 80 70 L80 30 Z" />
          <path d="M80 40 Q95 40 95 55 Q95 70 80 70" fill="none" stroke="currentColor" strokeWidth="4" />
          <ellipse cx="50" cy="30" rx="30" ry="8" />
          {/* Steam */}
          <motion.path
            d="M35 20 Q38 10 35 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M50 18 Q53 8 50 -2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -5, 0] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
          />
          <motion.path
            d="M65 20 Q68 10 65 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -5, 0] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
          />
        </motion.svg>

        {/* Cocktail Glass SVG - Top Right */}
        <motion.svg
          style={{ y: y2, rotate: rotate2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute top-32 right-16 w-28 h-28 text-cream"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="20,20 80,20 55,60 55,85 65,85 65,90 35,90 35,85 45,85 45,60" />
          <circle cx="70" cy="15" r="8" opacity="0.6" />
          <line x1="70" y1="15" x2="85" y2="5" stroke="currentColor" strokeWidth="2" />
        </motion.svg>

        {/* Leaf Pattern - Bottom Left */}
        <motion.svg
          style={{ y: y1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-40 left-8 w-40 h-40 text-khadi"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 95 Q15 70 20 35 Q25 10 50 5 Q75 10 80 35 Q85 70 50 95 Z" />
          <path d="M50 95 L50 25" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M50 60 Q35 50 30 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M50 50 Q65 40 70 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        </motion.svg>

        {/* Circle Pattern - Bottom Right */}
        <motion.svg
          style={{ rotate: rotate1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-20 right-10 w-48 h-48 text-gold"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
        </motion.svg>

        {/* Dots Pattern - Center Left */}
        <motion.svg
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="absolute top-1/2 left-4 w-20 h-40 text-cream"
          viewBox="0 0 40 80"
          fill="currentColor"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx="20" cy={10 + i * 10} r="3" opacity={0.3 + i * 0.08} />
          ))}
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold text-sm md:text-base tracking-[0.35em] uppercase mb-6">
            Road House Café & Bar
          </span>
        </motion.div>
<h1 className="heading-display text-gold mb-6">
  <TypingText
    text="Where Coffee Meets  Cocktails"
    delay={0.6}
    speed={0.045}
  />
</h1>

<p className="text-white text-lg md:text-xl font-light mb-10 tracking-wide">
  <TypingText
    text="Good Food • Better Drinks • Best Times"
    delay={1.8}
    speed={0.03}
  />
</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero-primary"
          >
            Get in Touch
          </a>
          <a 
            href="#cuisine" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cuisine')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero-secondary"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-charcoal/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-charcoal/60 rounded-full" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
