"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WaterBubbles from "@/components/home/WaterBubbles";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-brand-primary py-20 text-brand-cream sm:py-28"
    >
      <WaterBubbles variant="cta" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-xs font-semibold tracking-[0.24em] text-brand-sand uppercase">
          TRAYO &middot; A Crunch of Goodness
        </p>
        <h2
          id="final-cta-heading"
          className="mt-4 font-serif text-4xl leading-tight font-medium text-brand-white sm:text-5xl"
        >
          Ready for a happy crunch?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-brand-cream/90">
          Bring home light, flavourful fox nuts crafted for your everyday
          snacking moments.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-brand-charcoal px-8 py-4 text-xs font-semibold tracking-[0.2em] text-brand-white uppercase transition-colors hover:bg-brand-light-cream hover:text-brand-charcoal"
          >
            Explore the Shop
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
