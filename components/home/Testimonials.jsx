"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { DEMO_TESTIMONIALS } from "@/lib/homeData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = DEMO_TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? DEMO_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === DEMO_TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-brand-border bg-brand-light-cream py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
          Community Notes &middot; Demo Preview
        </p>
        <h2
          id="testimonials-heading"
          className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl"
        >
          Shared around bowls &amp; tables.
        </h2>

        <div className="relative mt-10 rounded-sm border border-brand-border bg-brand-cream px-6 py-10 sm:px-12 sm:py-12">
          <Quote
            className="mx-auto h-6 w-6 text-brand-primary/60"
            aria-hidden="true"
          />

          <div className="mt-6 min-h-[130px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <p className="font-serif text-xl leading-relaxed text-brand-charcoal italic sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold tracking-wide text-brand-charcoal">
                    {current.author}
                  </p>
                  <p className="mt-0.5 text-xs text-brand-muted">
                    {current.context}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-light-cream text-brand-charcoal transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
              {DEMO_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`View demo testimonial ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-6 bg-brand-primary"
                      : "w-2 bg-brand-sand/60 hover:bg-brand-sand"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-light-cream text-brand-charcoal transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
