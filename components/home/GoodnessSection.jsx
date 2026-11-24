"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GOODNESS_PILLARS } from "@/lib/homeData";

export default function GoodnessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="goodness-heading"
      className="border-y border-brand-border bg-brand-light-cream py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
            Why TRAYO
          </p>
          <h2
            id="goodness-heading"
            className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl"
          >
            Goodness is in the details.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Thoughtful choices at every step—from how our fox nuts are selected
            to the way each flavour lands on your palate.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {GOODNESS_PILLARS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="group bg-brand-light-cream p-7 transition-colors duration-300 hover:bg-brand-cream sm:p-8"
            >
              <span className="font-serif text-2xl font-medium text-brand-primary">
                {item.number}
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-brand-charcoal transition-colors group-hover:text-brand-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
