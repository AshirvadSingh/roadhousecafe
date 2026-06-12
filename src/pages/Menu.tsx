import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const Menu = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-12 px-4">
        <div className="container-content">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <div>
              <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-2 block">
                Our Offerings
              </span>
              <h1 className="heading-display text-primary-foreground">
                The Menu
              </h1>
            </div>
            <a
              href="/menu.pdf"
              download="RoadHouse-Menu.pdf"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-sans font-medium hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Menu
            </a>
          </motion.div>
        </div>
      </header>

      {/* PDF Embed */}
      <section className="py-8 px-4">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-elevated bg-card"
          >
            <iframe
              src={`https://docs.google.com/viewer?url=${window.location.origin}/menu.pdf&embedded=true`}
              className="w-full h-[85vh] md:h-[90vh] border-0"
              title="Road House Cafe Menu"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50 py-12 px-4">
        <div className="container-content text-center">
          <h2 className="heading-section text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Book a table or walk in and let us serve you the best
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#location" className="btn-primary">
              Visit Us
            </Link>
            <a
              href="tel:+919958387778"
              className="btn-secondary"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
