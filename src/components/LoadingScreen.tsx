import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const preloaderWords = ["Welcome", "स्वागत", "Bonjour", "Benvenuto", "Road House"];

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % preloaderWords.length);
    }, 540);

    return () => window.clearInterval(wordTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-8%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/10"
            style={{ width: 220 + i * 160, height: 220 + i * 160, left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.28, 0.1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.svg className="absolute bottom-0 left-0 right-0 h-56 w-full text-primary/30" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none">
        <motion.path
          d="M0,140 C260,40 420,240 720,120 C980,20 1160,180 1440,80"
          stroke="currentColor"
          strokeWidth="120"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.svg>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gold/80">Road House Café & Bar</p>
        <div className="relative h-24 w-screen overflow-hidden md:h-32">
          <AnimatePresence mode="wait">
            <motion.h1
              key={preloaderWords[wordIndex]}
              className="absolute inset-x-0 font-serif text-5xl text-cream md:text-8xl"
              initial={{ y: "120%", rotateX: -80, opacity: 0 }}
              animate={{ y: "0%", rotateX: 0, opacity: 1 }}
              exit={{ y: "-120%", rotateX: 80, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformPerspective: 900, transformOrigin: "50% 50% -80px" }}
            >
              {preloaderWords[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div className="mt-8 h-px w-72 overflow-hidden rounded-full bg-cream/15" initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.7 }}>
          <motion.div className="h-full rounded-full bg-gradient-to-r from-gold via-cream to-gold" style={{ width: `${progress}%` }} />
        </motion.div>

        <motion.p className="mt-5 text-xs uppercase tracking-[0.35em] text-cream/55" initial={{ opacity: 0 }} animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 1.6, repeat: Infinity }}>
          Curating your evening
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
