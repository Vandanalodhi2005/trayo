"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="story-heading"
      className="bg-brand-light-cream py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Lifestyle Image Column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <div className="group relative overflow-hidden rounded-sm border border-brand-border bg-brand-cream p-2.5">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/story-ritual.jpg"
                alt="Roasted makhana in a stoneware dish beside a ceramic cup of tea in warm morning light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Editorial Copy Column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-3xl leading-tight font-medium text-brand-charcoal sm:text-4xl lg:text-[2.75rem]"
          >
            Not just a snack. A better little everyday ritual.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            Snacking shouldn&apos;t feel like an afterthought. At TRAYO, we take
            a timeless Indian pantry classic—light, puffed fox nuts—and treat
            it with quiet care. Crisp textures, warm spices, and clean flavours
            made to sit effortlessly beside your morning tea, afternoon focus,
            or unhurried evenings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Simple ingredients, honest crunch, and nothing louder than good
            taste.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border-b border-brand-primary pb-1 text-sm font-medium tracking-wider text-brand-primary uppercase transition-colors hover:border-brand-charcoal hover:text-brand-charcoal"
            >
              Read Our Story
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
