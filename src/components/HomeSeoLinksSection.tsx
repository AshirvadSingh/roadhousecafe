import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { blogArticles } from "@/data/seoContent";
import asianFoodImage from "@/assets/asian-food.jpg";
import burgerImage from "@/assets/burger.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import coldBrewImage from "@/assets/cold-brew.jpg";
import espressoMartiniImage from "@/assets/espresso-martini.jpg";
import galleryBarImage from "@/assets/gallery-bar.jpg";
import galleryBrunchImage from "@/assets/gallery-brunch.jpg";
import galleryEventImage from "@/assets/gallery-event.jpg";
import galleryInteriorImage from "@/assets/gallery-interior-1.jpg";
import gallerySeatingImage from "@/assets/gallery-seating.jpg";
import heroImage from "@/assets/hero-bg.jpg";
import mojitoImage from "@/assets/mojito.jpg";
import oldFashionedImage from "@/assets/old-fashioned.jpg";

type DiscoveryCard = {
  title: string;
  eyebrow?: string;
  category?: string;
  readTime?: string;
  description: string;
  href: string;
  image: string;
  icon?: string;
};

const destinationCards: DiscoveryCard[] = [
  { title: "Best Cafes", eyebrow: "Cafe culture", description: "Easygoing coffee dates, long conversations and comfort food close to home.", href: "/best-cafe-in-greater-noida", image: coffeeImage },
  { title: "Live Music", eyebrow: "Thursday rituals", description: "Indie and Sufi evenings for people who prefer memories over playlists.", href: "/live-music-cafe-greater-noida", image: galleryEventImage },
  { title: "Rooftop Evenings", eyebrow: "Open-air plans", description: "A slower, warmer way to spend nights above the everyday rush.", href: "/cafe-in-greater-noida", image: gallerySeatingImage },
  { title: "Date Night Spots", eyebrow: "For two", description: "Cocktails, pizza and corners that make conversations feel effortless.", href: "/date-place-in-greater-noida", image: galleryInteriorImage },
  { title: "Cocktail Experiences", eyebrow: "Crafted pours", description: "From mojitos to espresso martinis, discover your table's signature order.", href: "/cocktail-bar-greater-noida", image: espressoMartiniImage },
  { title: "Weekend Hangouts", eyebrow: "Friends & groups", description: "Shareable food, beer and music-led plans for unhurried weekends.", href: "/weekend-party-place-greater-noida", image: burgerImage },
];

const nearbyGuides: DiscoveryCard[] = [
  { title: "Best Cafes Near Pari Chowk", description: "A quick local guide for coffee, food and relaxed evenings near the city's busiest meeting point.", href: "/cafe-near-pari-chowk", image: coldBrewImage },
  { title: "Coffee Near Delta 1 Metro", description: "Step off the metro and find a comfortable table for coffee, pasta, pizza or a longer evening.", href: "/cafe-near-delta-1-metro", image: coffeeImage },
  { title: "Top Weekend Hangouts", description: "Where group plans become easy with beer, cocktails, comfort food and a lively room.", href: "/weekend-party-place-greater-noida", image: galleryBrunchImage },
  { title: "Places Near Knowledge Park", description: "Student catch-ups, team breaks and after-class plans without a long commute.", href: "/cafe-near-knowledge-park", image: asianFoodImage },
  { title: "Jaypee Greens Evenings", description: "Neighbourhood dining, coffee and cocktail plans around Suntwilight Mall.", href: "/cafe-in-jaypee-greens", image: heroImage },
  { title: "Coffee Shop Hideaway", description: "For cold brews, quiet catch-ups and a slower afternoon around Greater Noida.", href: "/coffee-shop-in-greater-noida", image: coldBrewImage },
];

const areaGuides: DiscoveryCard[] = [
  { title: "Greater Noida", description: "Cafe, restaurant and bar guides for the city.", href: "/cafe-in-greater-noida", image: heroImage },
  { title: "Pari Chowk", description: "Nearby coffee, food and evening plans.", href: "/cafe-near-pari-chowk", image: coldBrewImage },
  { title: "Delta 1", description: "Guides around the metro and Road House.", href: "/cafe-near-delta-1-metro", image: coffeeImage },
  { title: "Jaypee Greens", description: "Neighbourhood dining and rooftop moods.", href: "/cafe-in-jaypee-greens", image: gallerySeatingImage },
  { title: "Knowledge Park", description: "Student-friendly catch-ups and group plans.", href: "/cafe-near-knowledge-park", image: asianFoodImage },
];

const experiences: DiscoveryCard[] = [
  { icon: "🍕", title: "Pizza & Beer Night", description: "Shareable slices, cold beer and a table that keeps the conversation going.", href: "/bar-in-greater-noida", image: burgerImage },
  { icon: "🎵", title: "Thursday Indie Nights", description: "Live music evenings built around familiar songs and spontaneous sing-alongs.", href: "/live-music-cafe-greater-noida", image: galleryEventImage },
  { icon: "🍸", title: "Cocktail Evenings", description: "A polished guide to drinks, rooftop energy and late-evening plans.", href: "/cocktail-bar-greater-noida", image: mojitoImage },
  { icon: "❤️", title: "Date Night Guide", description: "Relaxed dates with pasta, cocktails and none of the forced formality.", href: "/date-place-in-greater-noida", image: oldFashionedImage },
  { icon: "🎂", title: "Birthday Celebrations", description: "Food, music and a rooftop mood for birthdays that feel personal.", href: "/birthday-party-venue-greater-noida", image: galleryBrunchImage },
  { icon: "🏢", title: "Team Evenings", description: "Corporate gatherings that trade stiff banquet energy for better conversations.", href: "/corporate-party-venue-greater-noida", image: galleryBarImage },
  { icon: "🍽️", title: "Dinner Plans", description: "Restaurant-style comfort food for families, friends and unplanned cravings.", href: "/restaurant-in-greater-noida", image: asianFoodImage },
  { icon: "🧭", title: "Road House City Guide", description: "A behind-the-scenes guide to the neighbourhood experiences around Road House.", href: "/local-seo-strategy", image: heroImage },
];

const articleImages = [galleryBarImage, galleryEventImage, espressoMartiniImage, coldBrewImage, gallerySeatingImage, heroImage, galleryInteriorImage, asianFoodImage, mojitoImage, oldFashionedImage, galleryBrunchImage, coffeeImage];

const useAutoIndex = (length: number, delay = 3200) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (length <= 1) return undefined;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % length);
    }, delay);

    return () => window.clearInterval(interval);
  }, [delay, length]);

  return [active, setActive] as const;
};

const useGsapStyleProgress = (active: number) => {
  const [progress, setProgress] = useState(0);
  const target = useRef(active);
  const frame = useRef<number>();

  useEffect(() => {
    target.current = active;
    const tick = () => {
      setProgress((current) => current + (target.current - current) * 0.12);
      frame.current = window.requestAnimationFrame(tick);
    };
    frame.current = window.requestAnimationFrame(tick);
    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, [active]);

  return progress;
};

const PerspectiveCarousel = ({ items, sectionLabel }: { items: DiscoveryCard[]; sectionLabel: string }) => {
  const [active, setActive] = useAutoIndex(items.length, 3400);
  const smoothActive = useGsapStyleProgress(active);

  return (
    <div className="relative overflow-hidden py-4" style={{ perspective: "1400px" }}>
      <div className="relative mx-auto h-[500px] max-w-6xl">
        {items.map((item, index) => {
          const offset = index - active;
          const wrappedOffset = offset > items.length / 2 ? offset - items.length : offset < -items.length / 2 ? offset + items.length : offset;
          const smoothOffset = index - smoothActive;
          const rotate = wrappedOffset * -10;
          const translateX = wrappedOffset * 270;
          const translateZ = Math.max(-420, Math.abs(smoothOffset) * -170);
          const opacity = Math.abs(wrappedOffset) > 2 ? 0 : 1;

          return (
            <motion.div
              key={`${sectionLabel}-${item.title}`}
              className="absolute left-1/2 top-0 h-full w-[78%] max-w-[620px] -translate-x-1/2"
              animate={{ x: translateX, z: translateZ, rotateY: rotate, opacity, scale: wrappedOffset === 0 ? 1 : 0.84 }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
              style={{ transformStyle: "preserve-3d", zIndex: 20 - Math.abs(wrappedOffset) }}
            >
              <Link to={item.href} className="group block h-full overflow-hidden rounded-[2rem] shadow-elevated">
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{item.eyebrow || sectionLabel}</p>
                  <h3 className="font-serif text-4xl mb-4">{item.title}</h3>
                  <p className="text-cream/80 max-w-md">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={`${sectionLabel}-dot-${item.title}`}
            aria-label={`Show ${item.title}`}
            className={`h-2.5 rounded-full transition-all ${index === active ? "w-10 bg-primary" : "w-2.5 bg-primary/30"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ClipPathCarousel = ({ items }: { items: DiscoveryCard[] }) => {
  const [active, setActive] = useAutoIndex(items.length, 2800);
  const current = items[active];

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-background shadow-elevated">
      <motion.div key={current.title} initial={{ clipPath: "inset(0 45% 0 45% round 2rem)" }} animate={{ clipPath: "inset(0 0% 0 0% round 2rem)" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <Link to={current.href} className="grid min-h-[440px] lg:grid-cols-[1.1fr_0.9fr]">
          <img src={current.image} alt="" className="h-full min-h-[260px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" loading="lazy" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Popular Around You</p>
            <h3 className="heading-section text-charcoal mb-4">{current.title}</h3>
            <p className="text-body text-muted-foreground mb-8">{current.description}</p>
            <span className="text-primary font-semibold">Read guide →</span>
          </div>
        </Link>
      </motion.div>
      <div className="absolute bottom-5 right-5 flex gap-2">
        {items.map((item, index) => (
          <button key={item.title} aria-label={`Open ${item.title}`} onClick={() => setActive(index)} className={`h-2 rounded-full ${index === active ? "w-8 bg-primary" : "w-2 bg-primary/30"}`} />
        ))}
      </div>
    </div>
  );
};

const ScrollImageGrid = ({ articles }: { articles: typeof blogArticles }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.82, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div ref={ref} style={{ scale }} className="relative">
      <motion.div style={{ y }} className="pointer-events-none absolute left-1/2 top-1/3 z-20 -translate-x-1/2 text-center font-serif text-5xl text-cream mix-blend-exclusion md:text-7xl">
        Journal
      </motion.div>
      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {articles.map((article, index) => (
          <Link key={article.slug} to={`/blog/${article.slug}`} className="group mb-6 inline-block w-full overflow-hidden rounded-3xl bg-cream-dark shadow-card break-inside-avoid">
            <div className={index % 3 === 0 ? "h-72 overflow-hidden" : "h-52 overflow-hidden"}>
              <img src={articleImages[index % articleImages.length]} alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{article.focusKeyword} • 4 min read</p>
              <h3 className="font-serif text-xl mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground">{article.metaDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const AreaSlider = () => {
  const [active, setActive] = useAutoIndex(areaGuides.length, 2600);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-background p-6 md:p-8 shadow-elevated">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--khaki)),transparent_25%),radial-gradient(circle_at_80%_30%,hsl(var(--gold)),transparent_22%),radial-gradient(circle_at_50%_85%,hsl(var(--khaki)),transparent_28%)]" />
      <div className="relative grid gap-5 md:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="space-y-3">
          {areaGuides.map((area, index) => (
            <button key={area.title} onClick={() => setActive(index)} className={`block w-full rounded-2xl border p-4 text-left transition-all ${index === active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-cream/60 hover:border-primary"}`}>
              <span className="text-xs uppercase tracking-[0.25em] opacity-70">Explore</span>
              <span className="mt-1 block font-serif text-2xl">{area.title}</span>
            </button>
          ))}
        </div>
        <motion.div key={areaGuides[active].title} initial={{ opacity: 0, rotateY: -12, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 0.7 }} style={{ transformStyle: "preserve-3d" }}>
          <Link to={areaGuides[active].href} className="group relative block min-h-[420px] overflow-hidden rounded-[1.5rem]">
            <img src={areaGuides[active].image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-charcoal">⌖</span>
              <h3 className="font-serif text-4xl mb-3">{areaGuides[active].title}</h3>
              <p className="text-cream/80">{areaGuides[active].description}</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceSlider = () => {
  const duplicated = useMemo(() => [...experiences, ...experiences], []);

  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-6" animate={{ x: [0, -1920] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
        {duplicated.map((experience, index) => (
          <Link key={`${experience.title}-${index}`} to={experience.href} className="group min-w-[310px] overflow-hidden rounded-[2rem] bg-cream/10 border border-cream/10 hover:bg-cream/15 transition-colors">
            <div className="h-52 overflow-hidden">
              <img src={experience.image} alt="" className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <span className="text-3xl">{experience.icon}</span>
              <h3 className="font-serif text-2xl mt-4 mb-2">{experience.title}</h3>
              <p className="text-sm text-cream/70">{experience.description}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const HomeSeoLinksSection = () => {
  const [featuredArticle, ...journalArticles] = blogArticles;

  return (
    <section id="explore-greater-noida" className="bg-cream-dark">
      <div className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Greater Noida Guide</p>
            <h2 className="heading-display text-charcoal mb-5">Explore Greater Noida</h2>
            <p className="text-body text-muted-foreground">Curated cafe, music, rooftop and cocktail experiences around Road House — designed like a premium city guide with auto-sliding perspective cards.</p>
          </div>
          <PerspectiveCarousel items={destinationCards} sectionLabel="Explore" />
        </div>
      </div>

      <div className="pb-20 px-4 md:px-8">
        <div className="container-content">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">Close by</p>
            <h2 className="heading-section text-charcoal">Popular Around You</h2>
          </div>
          <ClipPathCarousel items={nearbyGuides} />
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Stories & culture</p>
              <h2 className="heading-display text-charcoal">Road House Journal</h2>
            </div>
            <Link to="/blog" className="text-primary font-semibold hover:underline">View the journal →</Link>
          </div>

          {featuredArticle && (
            <motion.div className="mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <Link to={`/blog/${featuredArticle.slug}`} className="group grid min-h-[520px] overflow-hidden rounded-[2rem] bg-charcoal shadow-elevated lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[320px] overflow-hidden">
                  <motion.img src={articleImages[0]} alt="" className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" loading="lazy" whileHover={{ scale: 1.06 }} />
                </div>
                <div className="flex flex-col justify-center p-8 text-cream md:p-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Featured • 5 min read</p>
                  <h3 className="font-serif text-4xl mb-4">{featuredArticle.title}</h3>
                  <p className="text-cream/80 max-w-xl mb-5">{featuredArticle.metaDescription}</p>
                  <span className="font-semibold">Read story →</span>
                </div>
              </Link>
            </motion.div>
          )}
          <ScrollImageGrid articles={journalArticles} />
        </div>
      </div>

      <div className="section-padding bg-cream-dark">
        <div className="container-content grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Neighbourhoods</p>
            <h2 className="heading-display text-charcoal mb-5">Explore By Area</h2>
            <p className="text-body text-muted-foreground">Choose a part of the city and let the area slider open a local guide that feels useful, not overwhelming.</p>
          </div>
          <AreaSlider />
        </div>
      </div>

      <div className="section-padding bg-charcoal text-cream">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-gold font-semibold mb-4">Plan the mood</p>
            <h2 className="heading-display mb-5">Recommended Experiences</h2>
            <p className="text-body text-cream/70">Pick the kind of evening you want; the carousel keeps moving while each experience quietly opens a deeper local guide.</p>
          </div>
          <ExperienceSlider />
        </div>
      </div>
    </section>
  );
};

export default HomeSeoLinksSection;
