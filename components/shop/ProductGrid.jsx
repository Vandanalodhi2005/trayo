import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-sm border border-brand-border bg-brand-light-cream px-6 py-14 text-center">
        <p className="font-serif text-2xl font-medium text-brand-charcoal">
          No matching makhana found
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          Try clearing your search or exploring all TRAYO flavours.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          View All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.slug}
          className="group flex flex-col border border-brand-border bg-brand-light-cream transition-colors duration-300 hover:border-brand-sand"
        >
          <div className="relative aspect-[4/4] w-full overflow-hidden bg-brand-cream">
            <Link
              href={`/product/${product.slug}`}
              className="relative block h-full w-full"
              aria-label={`View ${product.name}`}
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
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

            <h2 className="mt-2 font-serif text-xl font-medium text-brand-charcoal">
              <Link
                href={`/product/${product.slug}`}
                className="transition-colors hover:text-brand-primary"
              >
                {product.name}
              </Link>
            </h2>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
              {product.shortDescription}
            </p>

            <div className="mt-5 border-t border-brand-border/80 pt-4">
              <Link
                href={`/product/${product.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase transition-colors hover:text-brand-charcoal"
              >
                View Details
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
