import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Maximize2 } from "lucide-react";

const MENU_PAGE_COUNT = 13;

const pdfPageUrl = (page: number) => `/menu.pdf#page=${page}&toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

const MenuBookViewer = () => {
  const [page, setPage] = useState(1);
  const leftPage = page;
  const rightPage = page + 1 <= MENU_PAGE_COUNT ? page + 1 : undefined;

  const spreadLabel = useMemo(() => {
    if (!rightPage) return `Page ${leftPage}`;
    return `Pages ${leftPage}–${rightPage}`;
  }, [leftPage, rightPage]);

  const goNext = () => setPage((current) => Math.min(current + 2, MENU_PAGE_COUNT));
  const goPrev = () => setPage((current) => Math.max(current - 2, 1));

  return (
    <div className="rounded-[2rem] bg-charcoal p-4 shadow-elevated md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-cream">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Book view</p>
          <h2 className="font-serif text-2xl">Road House Menu</h2>
          <p className="text-sm text-cream/60">{spreadLabel} of {MENU_PAGE_COUNT}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={page === 1}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous menu pages"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            disabled={page >= MENU_PAGE_COUNT}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next menu pages"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold/90 sm:inline-flex"
          >
            <Maximize2 className="h-4 w-4" />
            Open PDF
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#efe7d6] p-3 md:p-5" style={{ perspective: "1800px" }}>
        <div className="pointer-events-none absolute left-1/2 top-5 bottom-5 z-10 hidden w-px -translate-x-1/2 bg-charcoal/20 shadow-[0_0_30px_rgba(0,0,0,0.35)] md:block" />
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, rotateY: page === 1 ? -10 : 18, x: 30 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: -18, x: -30 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 md:grid-cols-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-charcoal/10">
              <iframe
                src={pdfPageUrl(leftPage)}
                className="h-[72vh] w-full border-0 md:h-[82vh]"
                title={`Road House menu page ${leftPage}`}
              />
            </div>
            {rightPage && (
              <div className="hidden overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-charcoal/10 md:block">
                <iframe
                  src={pdfPageUrl(rightPage)}
                  className="h-[82vh] w-full border-0"
                  title={`Road House menu page ${rightPage}`}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: Math.ceil(MENU_PAGE_COUNT / 2) }, (_, index) => {
          const spreadStart = index * 2 + 1;
          return (
            <button
              key={spreadStart}
              onClick={() => setPage(spreadStart)}
              className={`h-2.5 rounded-full transition-all ${page === spreadStart ? "w-10 bg-gold" : "w-2.5 bg-cream/30 hover:bg-cream/60"}`}
              aria-label={`Open menu spread starting at page ${spreadStart}`}
            />
          );
        })}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <main className="min-h-screen bg-background">
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

      <section className="py-8 px-4">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MenuBookViewer />
          </motion.div>
        </div>
      </section>

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
            <a href="tel:+919958387778" className="btn-secondary">
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
