import { Link } from "react-router-dom";
import { blogArticles, seoLandingPages } from "@/data/seoContent";

const HomeSeoLinksSection = () => {
  return (
    <section id="local-seo-pages" className="section-padding bg-cream-dark">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Explore Road House
          </p>
          <h2 className="heading-section text-charcoal mb-4">
            Local Guides, Cafe Pages & Blog Articles
          </h2>
          <p className="text-body text-muted-foreground">
            Every local SEO landing page and blog article is linked directly from the home page so guests and search engines can
            discover Road House Café & Bar content for Greater Noida, Delta 1, Pari Chowk, Jaypee Greens, Knowledge Park and Delhi NCR.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-elevated bg-background">
            <h3 className="heading-card mb-5">SEO Landing Pages</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {seoLandingPages.map((page) => (
                <Link
                  key={page.slug}
                  to={`/${page.slug}`}
                  className="rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="card-elevated bg-background">
            <h3 className="heading-card mb-5">Blog Articles</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                to="/blog"
                className="rounded-xl border border-border bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                Blog Home
              </Link>
              {blogArticles.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {blog.title}
                </Link>
              ))}
              <Link
                to="/local-seo-strategy"
                className="rounded-xl border border-border bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                Complete Local SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeoLinksSection;
