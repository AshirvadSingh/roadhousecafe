import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/WhatsApp Video 2026-01-18 at 23.50.31.mp4";
import { Link } from "react-router-dom";

const VideoCTASection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const svgRotate1 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const svgRotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const svgY1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const svgY2 = useTransform(scrollYProgress, [0, 1], [50, -80]);
  const svgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-transparent pointer-events-none"
      />

      {/* Decorative SVG Elements with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Coffee Bean SVG - Top Left */}
        <motion.svg
          style={{ y: svgY1, rotate: svgRotate1, scale: svgScale }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.12 } : {}}
          transition={{ duration: 1 }}
          className="absolute -top-10 -left-10 w-48 h-48 text-primary"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <ellipse cx="50" cy="50" rx="30" ry="45" />
          <path d="M50 10 Q55 50 50 90" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5" />
        </motion.svg>

        {/* Steam SVG - Top Right */}
        <motion.svg
          style={{ y: svgY2 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.18 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-10 right-10 w-32 h-44 text-gold"
          viewBox="0 0 50 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <motion.path
            d="M10 70 Q15 50 10 30 Q5 10 15 0"
            animate={{ pathLength: [0, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M25 70 Q20 45 25 25 Q30 5 20 0"
            animate={{ pathLength: [0, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
          />
          <motion.path
            d="M40 70 Q45 50 40 30 Q35 10 45 0"
            animate={{ pathLength: [0, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity }}
          />
        </motion.svg>

        {/* Leaf SVG - Bottom Left */}
        <motion.svg
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 80]), rotate: svgRotate2 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 left-20 w-40 h-40 text-khadi"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 90 Q20 60 30 30 Q40 10 60 5 Q80 10 70 30 Q80 60 50 90 Z" />
          <path d="M50 90 L50 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M50 60 Q35 50 25 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
          <path d="M50 50 Q65 40 75 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
        </motion.svg>

        {/* Circle Pattern - Bottom Right */}
        <motion.svg
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 120]), scale: svgScale }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 text-primary"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="50" r="8" />
        </motion.svg>

        {/* Floating Dots - Left Side */}
        <motion.svg
          style={{ y: useTransform(scrollYProgress, [0, 1], [20, -60]) }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/3 left-4 w-12 h-48 text-gold"
          viewBox="0 0 20 100"
          fill="currentColor"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.circle
              key={i}
              cx="10"
              cy={10 + i * 14}
              r={3 - i * 0.3}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.svg>

        {/* Floating Dots - Right Side */}
        <motion.svg
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 50]) }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.12 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 right-6 w-10 h-36 text-cream"
          viewBox="0 0 20 80"
          fill="currentColor"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx="10"
              cy={10 + i * 16}
              r={2.5}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, delay: i * 0.25, repeat: Infinity }}
            />
          ))}
        </motion.svg>
      </div>

      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player with Parallax */}
          <motion.div
            style={{ y: videoY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-elevated group"
          >
            {/* Video */}
            <video
              ref={videoRef}
              src={heroVideo}
              loop
              muted={isMuted}
              playsInline
              className="w-full aspect-video object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Play/Pause Button - Center */}
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-20 h-20 rounded-full bg-gold/90 backdrop-blur-sm
                         flex items-center justify-center shadow-lg
                         transition-opacity duration-300
                         ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-primary" fill="currentColor" />
              ) : (
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              )}
            </motion.button>

            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                          flex items-center justify-center text-white
                          hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </motion.button>

              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                          flex items-center justify-center text-white
                          hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/50" />
            <div className="absolute bottom-16 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/50" />
            <div className="absolute bottom-16 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/50" />
          </motion.div>

          {/* Content with Parallax */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block"
              >
                Experience Road House
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="heading-section text-foreground mb-6"
              >
                Where Every Moment<br />
                <span className="text-gold">Becomes a Memory</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground font-sans text-lg leading-relaxed"
              >
                Step into our world of artisanal coffee, handcrafted cocktails, 
                and culinary excellence. Every visit is a journey through flavors, 
                ambiance, and unforgettable experiences.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "☕", title: "Specialty Coffee", desc: "Single-origin beans" },
                { icon: "🍸", title: "Craft Cocktails", desc: "Signature recipes" },
                { icon: "🍽️", title: "Global Cuisine", desc: "Chef's specials" },
                { icon: "🎵", title: "Live Music", desc: "Weekend nights" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card p-4 rounded-2xl border border-border hover:border-gold/50
                           transition-all duration-300 hover:shadow-lg group"
                >
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h4 className="font-serif text-foreground font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Get in Touch
              </a>
           <Link to="/menu" className="btn-primary">
                    View Full Menu
      </Link>
               </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Wave with Parallax */}
      <motion.svg
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.06 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 w-full h-32 text-primary"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z" />
      </motion.svg>
    </section>
  );
};

export default VideoCTASection;
