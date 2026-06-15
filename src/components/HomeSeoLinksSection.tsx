import { Link } from "react-router-dom";
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

const destinationCards = [
  {
    title: "Best Cafes",
    eyebrow: "Cafe culture",
    description: "Easygoing coffee dates, long conversations and comfort food close to home.",
    href: "/best-cafe-in-greater-noida",
    image: coffeeImage,
  },
  {
    title: "Live Music",
    eyebrow: "Thursday rituals",
    description: "Indie and Sufi evenings for people who prefer memories over playlists.",
    href: "/live-music-cafe-greater-noida",
    image: galleryEventImage,
  },
  {
    title: "Rooftop Evenings",
    eyebrow: "Open-air plans",
    description: "A slower, warmer way to spend nights above the everyday rush.",
    href: "/cafe-in-greater-noida",
    image: gallerySeatingImage,
  },
  {
    title: "Date Night Spots",
    eyebrow: "For two",
    description: "Cocktails, pizza and corners that make conversations feel effortless.",
    href: "/date-place-in-greater-noida",
    image: galleryInteriorImage,
  },
  {
    title: "Cocktail Experiences",
    eyebrow: "Crafted pours",
    description: "From mojitos to espresso martinis, discover your table's signature order.",
    href: "/cocktail-bar-greater-noida",
    image: espressoMartiniImage,
  },
  {
    title: "Weekend Hangouts",
    eyebrow: "Friends & groups",
    description: "Shareable food, beer and music-led plans for unhurried weekends.",
    href: "/weekend-party-place-greater-noida",
    image: burgerImage,
  },
];

const nearbyGuides = [
  {
    title: "Best Cafes Near Pari Chowk",
    description: "A quick local guide for coffee, food and relaxed evenings near the city's busiest meeting point.",
    href: "/cafe-near-pari-chowk",
    image: coldBrewImage,
  },
  {
    title: "Coffee Near Delta 1 Metro",
    description: "Step off the metro and find a comfortable table for coffee, pasta, pizza or a longer evening.",
    href: "/cafe-near-delta-1-metro",
    image: coffeeImage,
  },
  {
    title: "Top Weekend Hangouts",
    description: "Where group plans become easy with beer, cocktails, comfort food and a lively room.",
    href: "/weekend-party-place-greater-noida",
    image: galleryBrunchImage,
  },
  {
    title: "Places Near Knowledge Park",
    description: "Student catch-ups, team breaks and after-class plans without a long commute.",
    href: "/cafe-near-knowledge-park",
    image: asianFoodImage,
  },
  {
    title: "Jaypee Greens Evenings",
    description: "Neighbourhood dining, coffee and cocktail plans around Suntwilight Mall.",
    href: "/cafe-in-jaypee-greens",
    image: heroImage,
  },
  {
    title: "Coffee Shop Hideaway",
    description: "For cold brews, quiet catch-ups and a slower afternoon around Greater Noida.",
    href: "/coffee-shop-in-greater-noida",
    image: coldBrewImage,
  },
];

const areaGuides = [
  { area: "Greater Noida", note: "Cafe, restaurant and bar guides for the city.", href: "/cafe-in-greater-noida" },
  { area: "Pari Chowk", note: "Nearby coffee, food and evening plans.", href: "/cafe-near-pari-chowk" },
  { area: "Delta 1", note: "Guides around the metro and Road House.", href: "/cafe-near-delta-1-metro" },
  { area: "Jaypee Greens", note: "Neighbourhood dining and rooftop moods.", href: "/cafe-in-jaypee-greens" },
  { area: "Knowledge Park", note: "Student-friendly catch-ups and group plans.", href: "/cafe-near-knowledge-park" },
];

const experiences = [
  {
    icon: "🍕",
    title: "Pizza & Beer Night",
    description: "Shareable slices, cold beer and a table that keeps the conversation going.",
    href: "/bar-in-greater-noida",
    image: burgerImage,
  },
  {
    icon: "🎵",
    title: "Thursday Indie Nights",
    description: "Live music evenings built around familiar songs and spontaneous sing-alongs.",
    href: "/live-music-cafe-greater-noida",
    image: galleryEventImage,
  },
  {
    icon: "🍸",
    title: "Cocktail Evenings",
    description: "A polished guide to drinks, rooftop energy and late-evening plans.",
    href: "/cocktail-bar-greater-noida",
    image: mojitoImage,
  },
  {
    icon: "❤️",
    title: "Date Night Guide",
    description: "Relaxed dates with pasta, cocktails and none of the forced formality.",
    href: "/date-place-in-greater-noida",
    image: oldFashionedImage,
  },
  {
    icon: "🎂",
    title: "Birthday Celebrations",
    description: "Food, music and a rooftop mood for birthdays that feel personal.",
    href: "/birthday-party-venue-greater-noida",
    image: galleryBrunchImage,
  },
  {
    icon: "🏢",
    title: "Team Evenings",
    description: "Corporate gatherings that trade stiff banquet energy for better conversations.",
    href: "/corporate-party-venue-greater-noida",
    image: galleryBarImage,
  },
  {
    icon: "🍽️",
    title: "Dinner Plans",
    description: "Restaurant-style comfort food for families, friends and unplanned cravings.",
    href: "/restaurant-in-greater-noida",
    image: asianFoodImage,
  },
  {
    icon: "🧭",
    title: "Road House City Guide",
    description: "A behind-the-scenes guide to the neighbourhood experiences around Road House.",
    href: "/local-seo-strategy",
    image: heroImage,
  },
];

const articleImage = (index: number) => {
  const images = [galleryBarImage, galleryEventImage, espressoMartiniImage, coldBrewImage, gallerySeatingImage, heroImage, galleryInteriorImage, asianFoodImage, mojitoImage, oldFashionedImage, galleryBrunchImage, coffeeImage];
  return images[index % images.length];
};

const HomeSeoLinksSection = () => {
  const [featuredArticle, ...journalArticles] = blogArticles;

  return (
    <section id="explore-greater-noida" className="bg-cream-dark">
      <div className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
              Greater Noida Guide
            </p>
            <h2 className="heading-display text-charcoal mb-5">Explore Greater Noida</h2>
            <p className="text-body text-muted-foreground">
              Curated cafe, music, rooftop and cocktail experiences around Road House — designed like a premium city guide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {destinationCards.map((card, index) => (
              <Link
                key={card.title}
                to={card.href}
                className={`group relative overflow-hidden rounded-[2rem] min-h-[360px] shadow-elevated ${index === 0 ? "xl:col-span-2" : ""}`}
              >
                <img src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{card.eyebrow}</p>
                  <h3 className="font-serif text-3xl mb-3">{card.title}</h3>
                  <p className="text-cream/80 max-w-md">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-20 px-4 md:px-8">
        <div className="container-content">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">Close by</p>
              <h2 className="heading-section text-charcoal">Popular Around You</h2>
            </div>
            <span className="hidden md:inline text-sm text-muted-foreground">Swipe sideways to explore</span>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x scrollbar-hide">
            {nearbyGuides.map((guide) => (
              <Link key={guide.title} to={guide.href} className="group min-w-[280px] md:min-w-[360px] snap-start overflow-hidden rounded-3xl bg-background shadow-card">
                <div className="h-48 overflow-hidden">
                  <img src={guide.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="heading-card mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <span className="text-primary font-semibold">Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
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

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            {featuredArticle && (
              <Link to={`/blog/${featuredArticle.slug}`} className="group relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-elevated">
                <img src={articleImage(0)} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Featured • 5 min read</p>
                  <h3 className="font-serif text-4xl mb-4">{featuredArticle.title}</h3>
                  <p className="text-cream/80 max-w-xl mb-5">{featuredArticle.metaDescription}</p>
                  <span className="font-semibold">Read story →</span>
                </div>
              </Link>
            )}
            <div className="columns-1 sm:columns-2 gap-6 space-y-6">
              {journalArticles.map((article, index) => (
                <Link key={article.slug} to={`/blog/${article.slug}`} className="group mb-6 inline-block w-full overflow-hidden rounded-3xl bg-cream-dark shadow-card break-inside-avoid">
                  <div className={index % 3 === 0 ? "h-56 overflow-hidden" : "h-40 overflow-hidden"}>
                    <img src={articleImage(index + 1)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{article.focusKeyword} • 4 min read</p>
                    <h3 className="font-serif text-xl mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.metaDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-cream-dark">
        <div className="container-content grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Neighbourhoods</p>
            <h2 className="heading-display text-charcoal mb-5">Explore By Area</h2>
            <p className="text-body text-muted-foreground">
              Choose a part of the city and open a local guide that feels useful, not overwhelming.
            </p>
          </div>
          <div className="relative rounded-[2rem] bg-background p-6 md:p-8 shadow-elevated overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--khaki)),transparent_25%),radial-gradient(circle_at_80%_30%,hsl(var(--gold)),transparent_22%),radial-gradient(circle_at_50%_85%,hsl(var(--khaki)),transparent_28%)]" />
            <div className="relative grid sm:grid-cols-2 gap-4">
              {areaGuides.map((area) => (
                <Link key={area.area} to={area.href} className="rounded-2xl border border-border bg-cream/60 p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">⌖</span>
                  <h3 className="heading-card mb-2">{area.area}</h3>
                  <p className="text-sm text-muted-foreground">{area.note}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-charcoal text-cream">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-gold font-semibold mb-4">Plan the mood</p>
            <h2 className="heading-display mb-5">Recommended Experiences</h2>
            <p className="text-body text-cream/70">
              Pick the kind of evening you want; each experience quietly opens a deeper local guide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <Link key={experience.title} to={experience.href} className="group overflow-hidden rounded-[2rem] bg-cream/10 border border-cream/10 hover:bg-cream/15 transition-colors">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeoLinksSection;
