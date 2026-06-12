import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Deepak Mishra",
    rating: 5,
    text: "Amazing experience at RoadHouse Cafe near Pari Chowk. Delicious pizza and pasta, refreshing beverages, warm ambience, and courteous staff. Highly recommended!"
  },
  {
    name: "Vratkunj Verma",
    rating: 5,
    text: "A hidden gem with great food, impressive drinks, and outstanding service. Friendly staff and passionate ownership make every visit memorable."
  },
  {
    name: "Asit Verma",
    rating: 5,
    text: "Exceptional hospitality by the owners with live music, great ambience, and beautifully presented food. A family outing turned into a lasting memory."
  },
  {
    name: "Kunal Arya",
    rating: 5,
    text: "Electric rock-and-roll vibes, killer live music, flavorful food, and perfectly crafted drinks. More than a bar — it’s an experience."
  },
  {
    name: "Verified Guest",
    rating: 5,
    text: "Warm welcome, delicious food, and exceptional service. Staff and founders truly go above and beyond to create a cozy, memorable experience."
  }
];




const ratings = [
  { label: "Dining Rating", value: 4.7},
  { label: "Delivery Rating", value: 4.7},
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -20]);

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Floating Decorative SVG Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quote SVG - Top Left */}
        <motion.svg
          style={{ y: y1, rotate: rotate1 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1 }}
          className="absolute -top-10 -left-10 w-48 h-48 text-gold"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M30 60 Q10 60 10 40 Q10 20 30 20 L30 25 Q20 25 20 40 Q20 50 30 50 L30 60 Z" />
          <path d="M70 60 Q50 60 50 40 Q50 20 70 20 L70 25 Q60 25 60 40 Q60 50 70 50 L70 60 Z" />
        </motion.svg>

        {/* Star Pattern - Top Right */}
        <motion.svg
          style={{ y: y2, rotate: rotate2 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 right-10 w-32 h-32 text-accent"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <motion.polygon
            points="50,5 61,35 95,35 68,57 79,90 50,70 21,90 32,57 5,35 39,35"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.svg>

        {/* Heart SVG - Bottom Left */}
        <motion.svg
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -40]) }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-20 left-10 w-36 h-36 text-primary"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <motion.path
            d="M50 85 Q20 60 20 35 Q20 15 40 15 Q50 15 50 30 Q50 15 60 15 Q80 15 80 35 Q80 60 50 85 Z"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.svg>

        {/* Circles Pattern - Bottom Right */}
        <motion.svg
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.07 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -bottom-16 -right-16 w-56 h-56 text-khadi"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </motion.svg>

        {/* Sparkle SVGs - Scattered */}
        {[
          { x: "20%", y: "30%", size: 16, delay: 0 },
          { x: "80%", y: "45%", size: 12, delay: 0.5 },
          { x: "15%", y: "70%", size: 14, delay: 1 },
          { x: "85%", y: "75%", size: 10, delay: 1.5 },
        ].map((sparkle, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] } : {}}
            transition={{ duration: 2, delay: sparkle.delay, repeat: Infinity }}
            className="absolute text-gold"
            style={{ left: sparkle.x, top: sparkle.y, width: sparkle.size, height: sparkle.size }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
          </motion.svg>
        ))}
      </div>

      <div className="container-content relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
            What People Say
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Loved by Our Guests
          </h2>
          <div className="divider-subtle" />
        </motion.div>

        {/* Rating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {ratings.map((rating) => (
            <div
              key={rating.label}
              className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft"
            >
              <Star className="w-5 h-5 fill-accent text-accent" />
              <span className="font-serif text-2xl text-foreground font-semibold">
                {rating.value}
              </span>
              <span className="text-muted-foreground font-sans text-sm">
                {rating.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card-elevated"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-body text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
