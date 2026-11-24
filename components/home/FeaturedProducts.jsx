"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/homeData";

export default function FeaturedProducts() {
  const [wishlistIds, setWishlistIds] = useState([]);

  const toggleWishlist = (id) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      aria-labelledby="featured-heading"
      className="bg-brand-cream py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary uppercase">
              Curated Collection
            </p>
            <h2
              id="featured-heading"
              className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl"
            >
              Meet your next crush.
            </h2>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wider text-brand-charcoal uppercase transition-colors hover:text-brand-primary"
          >
            View All Products
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, index) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group flex flex-col border border-brand-border bg-brand-light-cream transition-colors duration-300 hover:border-brand-sand"
              >
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-brand-cream">
                  <Link
                    href={`/product/${product.slug}`}
                    className="relative block h-full w-full"
                    aria-label={`Discover ${product.name}`}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={product.alt}
                        className={`flex h-full w-full flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105 ${
                          product.placeholderTone === "primary"
                            ? "bg-brand-primary/12 text-brand-charcoal"
                            : "bg-brand-olive/12 text-brand-charcoal"
                        }`}
                      >
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-primary uppercase">
                          Product Photo Placeholder
                        </span>
                        <p className="mt-2 font-serif text-xl font-medium">
                          {product.name}
                        </p>
                        <p className="mt-1 text-[11px] text-brand-muted">
                          Add local image in public/images/
                        </p>
                      </div>
                    )}
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      isWishlisted
                        ? `Remove ${product.name} from wishlist`
                        : `Save ${product.name} to wishlist`
                    }
                    aria-pressed={isWishlisted}
                    className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-light-cream/90 text-brand-charcoal transition-colors hover:bg-brand-white hover:text-brand-primary"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isWishlisted
                          ? "fill-brand-primary text-brand-primary"
                          : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-brand-olive uppercase">
                      {product.category}
                    </span>
                    <span className="text-xs font-medium text-brand-muted">
                      {product.samplePrice}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-xl font-medium text-brand-charcoal">
                    <Link
                      href={`/product/${product.slug}`}
                      className="transition-colors hover:text-brand-primary"
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {product.description}
                  </p>

                  <div className="mt-5 border-t border-brand-border/80 pt-4">
                    <Link
                      href={`/product/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase transition-colors hover:text-brand-charcoal"
                    >
                      Discover Flavour
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
