import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { anchorTextPlan, backlinkPlan, blogArticles, citationDescriptions, gbpPosts, internalLinkStructure, qnaSuggestions, reviewReplies, schemaCatalog, seoLandingPages, sitemapStructure } from "@/data/seoContent";

const SeoStrategy = () => {
  useEffect(() => {
    document.title = "Road House Café & Bar Local SEO & Backlink Strategy";
  }, []);

  const backlinkGroups = backlinkPlan.reduce<Record<string, typeof backlinkPlan>>((groups, item) => {
    groups[item.category] = [...(groups[item.category] || []), item];
    return groups;
  }, {});

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-36 bg-cream-dark">
        <div className="container-content">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">White-hat SEO plan</p>
          <h1 className="heading-display text-charcoal mb-6">Road House Café & Bar Complete Local SEO & Backlink Strategy</h1>
          <p className="text-body text-muted-foreground max-w-4xl">A practical local SEO content, citation, schema, internal linking, sitemap, Google Business Profile and backlink plan targeting Greater Noida, Noida and Delhi NCR without spammy link building.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content space-y-16">
          <section>
            <h2 className="heading-section mb-6">SEO Landing Pages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {seoLandingPages.map((page) => (
                <a key={page.slug} href={`/${page.slug}`} className="card-elevated block">
                  <h3 className="heading-card mb-2">{page.title}</h3>
                  <p className="text-sm text-muted-foreground">/{page.slug}</p>
                  <p className="text-sm mt-3">{page.metaDescription}</p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-section mb-6">Blog Content Plans</h2>
            <div className="grid gap-4">
              {blogArticles.map((blog) => (
                <article key={blog.slug} className="card-elevated">
                  <h3 className="heading-card">{blog.title}</h3>
                  <p className="text-sm text-primary mt-2">Focus keyword: {blog.focusKeyword}</p>
                  <p className="text-muted-foreground mt-3">{blog.angle}</p>
                  <p className="text-sm mt-3"><strong>Meta title:</strong> {blog.metaTitle}</p>
                  <p className="text-sm"><strong>Meta description:</strong> {blog.metaDescription}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-section mb-6">Local Citation Descriptions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {citationDescriptions.map((citation) => (
                <div key={citation.platform} className="card-elevated">
                  <h3 className="font-semibold text-lg mb-2">{citation.platform}</h3>
                  <p className="text-sm text-muted-foreground">{citation.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-section mb-6">Backlink Plan</h2>
            <div className="space-y-6">
              {Object.entries(backlinkGroups).map(([category, links]) => (
                <div key={category} className="card-elevated">
                  <h3 className="heading-card mb-3">{category}: {links.length}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    {links.slice(0, 12).map((link) => (
                      <p key={`${category}-${link.prospect}`}><strong>{link.suggestedAnchor}</strong> — {link.approach}</p>
                    ))}
                  </div>
                  {links.length > 12 && <p className="text-sm text-muted-foreground mt-3">Continue the same quality-control process for all {links.length} prospects.</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated">
              <h2 className="heading-section mb-4">Anchor Text Plan</h2>
              {Object.entries(anchorTextPlan).map(([group, anchors]) => (
                <div key={group} className="mb-4">
                  <h3 className="font-semibold capitalize">{group}</h3>
                  <p className="text-sm text-muted-foreground">{anchors.join(" • ")}</p>
                </div>
              ))}
            </div>
            <div className="card-elevated">
              <h2 className="heading-section mb-4">Complete Schema Set</h2>
              <p className="text-muted-foreground">{schemaCatalog.join(" • ")}</p>
              <h2 className="heading-section mt-8 mb-4">XML Sitemap Structure</h2>
              <p className="text-muted-foreground">{sitemapStructure.join(" • ")}</p>
            </div>
          </section>

          <section>
            <h2 className="heading-section mb-6">Internal Linking Structure</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {internalLinkStructure.map((item) => (
                <div key={item.page} className="card-elevated">
                  <h3 className="font-semibold text-lg mb-2">{item.page}</h3>
                  <p className="text-sm text-muted-foreground">Links to: {item.linksTo.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-section mb-6">Google Business Profile Strategy</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="card-elevated"><h3 className="heading-card mb-3">30 Posts</h3>{gbpPosts.slice(0, 10).map((post) => <p className="text-sm mb-2" key={post}>{post}</p>)}</div>
              <div className="card-elevated"><h3 className="heading-card mb-3">30 Review Replies</h3>{reviewReplies.slice(0, 10).map((reply) => <p className="text-sm mb-2" key={reply}>{reply}</p>)}</div>
              <div className="card-elevated"><h3 className="heading-card mb-3">30 Q&A Suggestions</h3>{qnaSuggestions.slice(0, 10).map((qa) => <p className="text-sm mb-2" key={qa.question}><strong>{qa.question}</strong> {qa.answer}</p>)}</div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SeoStrategy;
