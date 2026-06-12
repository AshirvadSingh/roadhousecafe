import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogArticles, businessInfo } from "@/data/seoContent";

const BlogIndex = () => {
  useEffect(() => {
    document.title = "Road House Café & Bar Blog | Greater Noida Food, Drinks & Nightlife";
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute(
      "content",
      "Read Road House Café & Bar blogs on Greater Noida nightlife, cafes, cocktails, beer, live music, date nights, rooftop evenings and party venues.",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="section-padding pt-36 bg-cream-dark">
        <div className="container-content">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Road House Journal</p>
          <h1 className="heading-display text-charcoal mb-6">Greater Noida Food, Drinks & Nightlife Blog</h1>
          <p className="text-body text-muted-foreground max-w-4xl">
            Local stories, guides and search-focused articles from {businessInfo.name} covering cafes, restaurants, bars, beer,
            farmhouse pizza, white sauce pasta, Indie Night, rooftop evenings and things to do around Delta 1 and Greater Noida.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((blog) => (
            <article key={blog.slug} className="card-elevated flex flex-col">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{blog.focusKeyword}</p>
              <h2 className="heading-card mb-3">{blog.title}</h2>
              <p className="text-sm text-muted-foreground flex-1">{blog.metaDescription}</p>
              <Link to={`/blog/${blog.slug}`} className="text-primary font-semibold mt-6 hover:underline">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogIndex;
