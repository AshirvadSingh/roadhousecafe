import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import coffeeImg from "@/assets/coffee.jpg";
import indianImg from "@/assets/indian-food.jpg";
import asianImg from "@/assets/asian-food.jpg";
import burgerImg from "@/assets/burger.jpg";

const cuisines = [
  {
    title: "Coffee & Beverages",
    description: "Artisan brews, signature lattes, and refreshing coolers",
    image: coffeeImg,
    icon: "☕",
  },
  {
    title: "North Indian",
    description: "Rich curries, tandoori favorites, and classic dals",
    image: indianImg,
    icon: "🥘",
  },
  {
    title: "Asian & Continental",
    description: "Noodles, dim sum, pasta, and global flavors",
    image: asianImg,
    icon: "🌏",
  },
  {
    title: "Fast Food",
    description: "Gourmet burgers, loaded fries, and quick bites",
    image: burgerImg,
    icon: "🍔",
  },
];

const CuisineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cuisine" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
            What We Serve
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Cuisine Highlights
          </h2>
          <div className="divider-subtle" />
        </motion.div>

        {/* Cuisine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-elevated overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 text-3xl">{cuisine.icon}</span>
                </div>
                <h3 className="heading-card text-foreground mb-2">{cuisine.title}</h3>
                <p className="text-subtle">{cuisine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
