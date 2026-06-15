import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessInfo, getBaseSchema, seoLandingPages } from "@/data/seoContent";

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const SeoLandingPage = () => {
  const { slug } = useParams();
  const page = seoLandingPages.find((item) => item.slug === slug);

  useEffect(() => {
    if (!page) return;
    document.title = page.metaTitle;
    setMeta("description", page.metaDescription);
  }, [page]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const pageUrl = `${businessInfo.website}/${page.slug}`;
  const schemas = [
    { ...getBaseSchema(), "@id": `${pageUrl}#business` },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.website },
        { "@type": "ListItem", position: 2, name: page.title, item: pageUrl },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="section-padding pt-36 bg-cream-dark">
        <div className="container-content grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Greater Noida Local Guide</p>
            <h1 className="heading-display text-charcoal mb-6">{page.h1}</h1>
            <p className="text-body text-muted-foreground max-w-3xl">{page.intro}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={businessInfo.phoneHref} className="btn-primary">Call {businessInfo.phone}</a>
              <Link to="/menu" className="btn-secondary">View Menu</Link>
            </div>
          </div>
          <aside className="card-elevated bg-background">
            <h2 className="heading-card mb-4">Visit Road House</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Address:</strong> {businessInfo.address}</p>
              <p><strong className="text-foreground">Landmark:</strong> {businessInfo.landmark}</p>
              <p><strong className="text-foreground">Hours:</strong> {businessInfo.hours}</p>
              <p><strong className="text-foreground">Email:</strong> {businessInfo.email}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="lg:sticky lg:top-28 h-fit card-elevated">
            <h2 className="heading-card mb-4">Internal Links</h2>
            <nav className="grid gap-3">
              {page.internalLinks.map((link) => (
                <Link key={`${page.slug}-${link.href}-${link.label}`} to={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="space-y-12">
            {page.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="heading-section text-charcoal">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 70)} className="text-body text-muted-foreground">{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
              <h2 className="heading-section mb-4">Book your table</h2>
              <p className="text-lg opacity-90 mb-6">{page.cta}</p>
              <div className="flex flex-wrap gap-4">
                <a href={businessInfo.phoneHref} className="bg-cream text-charcoal px-6 py-3 rounded-full font-semibold">Call Now</a>
                <a href={`mailto:${businessInfo.email}`} className="border border-cream/60 px-6 py-3 rounded-full font-semibold">Email Us</a>
              </div>
            </section>

            <section>
              <h2 className="heading-section text-charcoal mb-6">Frequently Asked Questions</h2>
              <div className="grid gap-4">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="card-elevated">
                    <summary className="cursor-pointer font-semibold text-lg">{faq.question}</summary>
                    <p className="text-muted-foreground mt-3">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SeoLandingPage;
