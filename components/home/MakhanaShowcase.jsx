"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SHOWCASE_GALLERY } from "@/lib/homeData";

const TONE_CLASSES = {
  sand: "bg-brand-sand/25 text-brand-charcoal",
  olive: "bg-brand-olive/15 text-brand-charcoal",
  cream: "bg-brand-cream text-brand-charcoal",
};

export default function MakhanaShowcase() {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="bg-brand-cream py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary uppercase">
              The Makhana Experience
            </p>
            <h2
              id="showcase-heading"
              className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl"
            >
              Crafted for texture, warmth &amp; moments.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-brand-muted">
            From pure, airy lotus seeds to small-batch seasonings—every detail
            is designed for unhurried, everyday enjoyment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2">
          {SHOWCASE_GALLERY.map((item, index) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-sm border border-brand-border bg-brand-light-cream ${item.span}`}
            >
              <div className={`relative w-full overflow-hidden ${item.aspect}`}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={item.alt}
                    className={`flex h-full min-h-[220px] w-full flex-col items-center justify-center p-6 text-center ${
                      TONE_CLASSES[item.placeholderTone] || TONE_CLASSES.cream
                    }`}
                  >
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-primary uppercase">
                      Image Placeholder
                    </span>
                    <p className="mt-2 font-serif text-2xl font-medium">
                      {item.title}
                    </p>
                    <p className="mt-1 max-w-xs text-xs text-brand-muted">
                      Replace with local studio photography in{" "}
                      <code>public/images/</code>
                    </p>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/25 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-brand-white">
                  <p className="font-serif text-lg font-medium">{item.title}</p>
                  <p className="mt-0.5 text-xs text-brand-cream/85">
                    {item.caption}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
