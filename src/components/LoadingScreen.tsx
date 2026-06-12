import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/10"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8], 
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              delay: i * 0.3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Coffee Beans */}
        {[...Array(8)].map((_, i) => (
          <motion.svg
            key={`bean-${i}`}
            className="absolute text-gold/20"
            style={{
              width: 20 + Math.random() * 20,
              height: 30 + Math.random() * 20,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            viewBox="0 0 100 100"
            fill="currentColor"
            initial={{ opacity: 0, y: 50, rotate: Math.random() * 360 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [50, -50],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <ellipse cx="50" cy="50" rx="25" ry="40" />
            <path d="M50 15 Q55 50 50 85" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
          </motion.svg>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Coffee Cup SVG Logo */}
          <motion.svg
            className="w-32 h-32 text-gold"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            {/* Cup Body */}
            <motion.path
              d="M20 35 L20 75 Q20 90 35 90 L65 90 Q80 90 80 75 L80 35 Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              fill="currentColor"
            />
            {/* Cup Handle */}
            <motion.path
              d="M80 45 Q100 45 100 60 Q100 75 80 75"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Cup Top */}
            <motion.ellipse
              cx="50"
              cy="35"
              rx="32"
              ry="8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            {/* Steam Lines */}
            <motion.g>
              {[35, 50, 65].map((x, i) => (
                <motion.path
                  key={x}
                  d={`M${x} 25 Q${x + 5} 15 ${x} 5`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [10, -5, -10]
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: 1 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.g>
          </motion.svg>

          {/* Glowing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, transparent 40%, rgba(212, 175, 55, 0.2) 70%, transparent 100%)",
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1 
            className="font-serif text-4xl md:text-5xl text-gold tracking-wider mb-2"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            ROAD HOUSE
          </motion.h1>
          <motion.p
            className="font-sans text-sm text-cream/80 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Café & Bar
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-48 h-1 bg-cream/20 rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gold via-cream to-gold rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-4 text-cream/60 font-sans text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Brewing your experience...
        </motion.p>
      </div>

      {/* Bottom Decorative Wave */}
      <motion.svg
        className="absolute bottom-0 left-0 right-0 w-full h-24 text-gold/10"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="currentColor"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z"
          animate={{ 
            d: [
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z",
              "M0,60 C360,20 720,80 1080,40 C1260,55 1350,65 1440,60 L1440,100 L0,100 Z",
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LoadingScreen;
