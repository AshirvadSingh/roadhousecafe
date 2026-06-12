import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogArticles, businessInfo } from "@/data/seoContent";

type BlogArticleItem = (typeof blogArticles)[number];

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const getLinkHref = (label: string) => {
  const normalized = label.toLowerCase();
  if (normalized.includes("cocktail")) return "/cocktail-bar-greater-noida";
  if (normalized.includes("live music") || normalized.includes("indie")) return "/live-music-cafe-greater-noida";
  if (normalized.includes("date")) return "/date-place-in-greater-noida";
  if (normalized.includes("pizza") || normalized.includes("food") || normalized.includes("restaurant")) return "/restaurant-in-greater-noida";
  if (normalized.includes("bar") || normalized.includes("beer")) return "/bar-in-greater-noida";
  if (normalized.includes("rooftop") || normalized.includes("café") || normalized.includes("cafe")) return "/cafe-in-greater-noida";
  return "/local-seo-strategy";
};

const buildBlogSections = (blog: BlogArticleItem) => [
  {
    heading: "The local shift behind this story",
    paragraphs: [
      `${blog.angle} This matters because Greater Noida is no longer only a place people return to after work. Around Delta 1, Jaypee Greens, Pari Chowk and Knowledge Park, residents increasingly look for a Cafe, Restaurant or Bar that is close enough for spontaneous plans but polished enough for memorable evenings.`,
      `Searches around ${blog.focusKeyword}, Bar Near Me, Cafe in Greater Noida, Beer, Farmhouse Pizza, White Sauce Pasta and Live Music in Greater Noida all point to a simple local need: people want dependable places nearby where the food, drinks, music and atmosphere work together without forcing a long drive across Delhi NCR.`,
    ],
  },
  {
    heading: "What guests are really looking for",
    paragraphs: [
      `Most guests are not searching for a technical category. They are searching for a mood. A couple wants a date night that does not feel like a job interview. Friends want one table where coffee, cocktails and pizza can all happen. A corporate team wants a venue that feels relaxed rather than stiff. A birthday group wants music, food, service and enough energy to make the night feel special.`,
      `That is why the strongest local content should be written for real decisions, not only keywords. The question is not simply where to find ${blog.focusKeyword}. The question is where a Greater Noida guest can sit comfortably, order confidently, hear good music, share a beer or cocktail, and leave with a story that feels worth repeating.`,
    ],
  },
  {
    heading: "How Road House fits the evening",
    paragraphs: [
      `${businessInfo.name} was built for those everyday plans that become better than expected. The venue is located at Suntwilight Mall, Jaypee Greens, opposite Delta 1 Metro Station, which makes it practical for people coming from Greater Noida, Pari Chowk, Knowledge Park, Noida and the wider Delhi NCR area.`,
      `The experience brings together rooftop seating, coffee, cold beer, cocktails, farmhouse pizza, white sauce pasta, shareable food and Thursday Indie & Sufi Nights. Guests can begin with a quick coffee, stay for dinner, order another round, listen to live music and turn an ordinary weekday or weekend into a proper local outing.`,
    ],
  },
  {
    heading: "Why the details matter",
    paragraphs: [
      `Local hospitality is built in details: the table that feels comfortable, the drink that arrives cold, the pizza that can be shared, the music that does not overpower conversation and the staff that understands whether a group wants privacy, celebration or help planning the next round.`,
      `For Road House, the goal is not to turn Greater Noida into Delhi. The better goal is to help Greater Noida become more itself: relaxed, accessible, social and confident. That is why articles like this support both guests and search visibility. They explain the culture behind the venue while giving searchers useful answers before they book a table.`,
    ],
  },
  {
    heading: "Plan your visit",
    paragraphs: [
      `Road House Café & Bar is open ${businessInfo.hours}. Visit us on the first floor, Shop No. 36 & 37, Suntwilight Mall, Block B, Jaypee Greens, Greater Noida, UP 201308, opposite Delta 1 Metro Station.`,
      `For reservations, date nights, birthday celebrations, corporate parties, weekend plans or Thursday Indie & Sufi Nights, call ${businessInfo.phone} or email ${businessInfo.email}.`,
    ],
  },
];

const buildFaqs = (blog: BlogArticleItem) => [
  { question: `What is ${blog.focusKeyword} like in Greater Noida?`, answer: `It is growing into a local culture of cafes, bars, rooftop seating, cocktails, beer, live music and easy evening plans around Delta 1, Jaypee Greens, Pari Chowk and Knowledge Park.` },
  { question: "Where is Road House Café & Bar located?", answer: `${businessInfo.name} is at Suntwilight Mall, Jaypee Greens, Greater Noida, opposite Delta 1 Metro Station.` },
  { question: "Does Road House host live music?", answer: "Yes. Road House hosts Thursday Indie & Sufi Nights for guests looking for live music in Greater Noida." },
  { question: "How can I book a table?", answer: `Call ${businessInfo.phone} or email ${businessInfo.email} to enquire about tables, parties and group bookings.` },
];

const BlogArticle = () => {
  const { blogSlug } = useParams();
  const blog = blogArticles.find((item) => item.slug === blogSlug);

  useEffect(() => {
    if (!blog) return;
    document.title = blog.metaTitle;
    setMeta("description", blog.metaDescription);
  }, [blog]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const sections = buildBlogSections(blog);
  const faqs = buildFaqs(blog);
  const articleUrl = `${businessInfo.website}/blog/${blog.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.metaDescription,
      mainEntityOfPage: articleUrl,
      author: { "@type": "Organization", name: businessInfo.name },
      publisher: { "@type": "Organization", name: businessInfo.name },
      about: blog.focusKeyword,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article>
        <section className="section-padding pt-36 bg-cream-dark">
          <div className="container-content max-w-5xl">
            <Link to="/blog" className="text-primary font-semibold hover:underline">← Back to blog</Link>
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mt-8 mb-4">{blog.focusKeyword}</p>
            <h1 className="heading-display text-charcoal mb-6">{blog.title}</h1>
            <p className="text-body text-muted-foreground max-w-4xl">{blog.metaDescription}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-content grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="lg:sticky lg:top-28 h-fit card-elevated">
              <h2 className="heading-card mb-4">Related local pages</h2>
              <nav className="grid gap-3">
                {blog.internalLinks.map((label) => (
                  <Link key={`${blog.slug}-${label}`} to={getLinkHref(label)} className="text-primary hover:underline">
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 rounded-2xl bg-cream-dark p-5">
                <p className="font-semibold mb-2">Book a table</p>
                <p className="text-sm text-muted-foreground mb-4">{businessInfo.landmark}</p>
                <a href={businessInfo.phoneHref} className="text-primary font-semibold">{businessInfo.phone}</a>
              </div>
            </aside>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="heading-section text-charcoal">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 80)} className="text-body text-muted-foreground">{paragraph}</p>
                  ))}
                </section>
              ))}

              <section className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
                <h2 className="heading-section mb-4">Visit Road House Café & Bar</h2>
                <p className="text-lg opacity-90 mb-6">
                  Rooftop seating, handcrafted cocktails, beer, farmhouse pizza, white sauce pasta and Thursday Indie & Sufi Nights near Delta 1 Metro, Greater Noida.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={businessInfo.phoneHref} className="bg-cream text-charcoal px-6 py-3 rounded-full font-semibold">Call Now</a>
                  <Link to="/menu" className="border border-cream/60 px-6 py-3 rounded-full font-semibold">View Menu</Link>
                </div>
              </section>

              <section>
                <h2 className="heading-section text-charcoal mb-6">FAQs</h2>
                <div className="grid gap-4">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="card-elevated">
                      <summary className="cursor-pointer font-semibold text-lg">{faq.question}</summary>
                      <p className="text-muted-foreground mt-3">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default BlogArticle;
