"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WaterBubbles from "@/components/home/WaterBubbles";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const textInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const textAnimate = { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-cream"
    >
      {/* Subtle warm radial glow behind imagery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-primary/10 blur-3xl lg:h-[560px] lg:w-[560px]"
      />

      {/* Realistic floating water bubbles */}
      <WaterBubbles variant="hero" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        {/* Editorial Copy Column */}
        <motion.div
          initial={textInitial}
          animate={textAnimate}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2.5 border border-brand-sand/70 bg-brand-light-cream px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-brand-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            TRAYO &middot; A Crunch of Goodness
          </div>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl xl:text-[4.1rem]"
          >
            A little crunch of{" "}
            <span className="italic text-brand-primary">goodness.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Meet your new favourite kind of crunch. Deliciously snackable
            makhana, made for moments worth savouring.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-brand-primary px-7 py-3.5 text-sm font-medium tracking-wider text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
            >
              Explore the Crunch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-sm border border-brand-charcoal/30 bg-brand-light-cream/60 px-7 py-3.5 text-sm font-medium tracking-wider text-brand-charcoal uppercase transition-colors hover:border-brand-charcoal hover:bg-brand-surface"
            >
              Discover TRAYO
            </Link>
          </div>

          {/* Editorial Micro-Details */}
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-border pt-6">
            <div>
              <p className="font-serif text-lg font-medium text-brand-charcoal">
                Light
              </p>
              <p className="mt-0.5 text-xs text-brand-muted">Airy puffed crunch</p>
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-brand-charcoal">
                Roasted
              </p>
              <p className="mt-0.5 text-xs text-brand-muted">Small-batch care</p>
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-brand-charcoal">
                Honest
              </p>
              <p className="mt-0.5 text-xs text-brand-muted">Everyday snacking</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Food Photography Column */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-sm border border-brand-sand/50 bg-brand-light-cream p-2.5 sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4]">
              <Image
                src="/images/hero-makhana.jpg"
                alt="Handcrafted ceramic bowl filled with crisp roasted TRAYO makhana on warm cream and terracotta linen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Subtle editorial corner label */}
            <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] tracking-[0.16em] text-brand-muted uppercase">
              <span>Signature Fox Nuts</span>
              <span className="text-brand-primary font-medium">
                Crafted for Today
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
