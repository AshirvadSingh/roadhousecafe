import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Visit Us
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Find Your Way to Good Times
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">8:00 AM – 11:00 PM</p>
                  <p className="text-muted-foreground text-sm">Open all days</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">First Floor, Shop No. 36 & 37</p>
                  <p className="text-muted-foreground">Suntwilight Mall, Block B, Jaypee Greens</p>
                  <p className="text-muted-foreground">Greater Noida, UP 201308</p>
                  <p className="text-muted-foreground text-sm italic">
                    (Opposite Metro Station Delta 1)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Reservations</h4>
                  <a 
                    href="tel:+91 9958387778" 
                    className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
                  >
                    +91 99583 87778
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Map */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  <div className="rounded-2xl overflow-hidden shadow-elevated h-[400px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0603374852644!2d77.52364277459735!3d28.47772949109526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebb5a7dc73c3%3A0xbbac765a40be53b7!2sRoadHouse%20Cafe%20and%20Bar!5e0!3m2!1sen!2sin!4v1769242484344!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Road House Location"
      className="grayscale hover:grayscale-0 transition-all duration-500"
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
