import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  PRODUCTS,
  getAllProducts,
  getCollectionBySlug,
  getProductBySlug,
} from "@/lib/catalog";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const collection = getCollectionBySlug(product.collectionSlug);
  const relatedProducts = getAllProducts().filter(
    (item) => item.slug !== product.slug
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs text-brand-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/shop" className="hover:text-brand-primary">
              Shop
            </Link>
          </li>
          {collection && (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="hover:text-brand-primary"
                >
                  {collection.name}
                </Link>
              </li>
            </>
          )}
          <li aria-hidden="true">/</li>
          <li className="font-medium text-brand-charcoal">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Product Image */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-sm border border-brand-border bg-brand-light-cream p-3">
            <div className="relative aspect-square w-full overflow-hidden bg-brand-cream">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-olive uppercase">
            {product.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-4 border-b border-brand-border pb-6">
            <span className="font-serif text-2xl font-medium text-brand-primary">
              {product.samplePrice}
            </span>
            <span className="text-xs tracking-wider text-brand-muted uppercase">
              {product.weightLabel}
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            {product.fullDescription}
          </p>

          <ul className="mt-6 space-y-2.5">
            {product.tastingNotes.map((note) => (
              <li
                key={note}
                className="flex items-center gap-2.5 text-sm text-brand-charcoal"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-brand-primary"
                  aria-hidden="true"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-sm border border-brand-border bg-brand-light-cream p-4 text-xs leading-relaxed text-brand-muted">
            Online ordering and Razorpay checkout are coming soon. Sample prices
            are shown for catalog preview only.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
            >
              View Shopping Bag
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-sm border border-brand-charcoal/30 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Flavours
            </Link>
          </div>
        </div>
      </div>

      {/* Other Flavours */}
      <div className="mt-20 border-t border-brand-border pt-12">
        <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
          More from TRAYO
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link
              key={item.slug}
              href={`/product/${item.slug}`}
              className="group flex items-center gap-4 rounded-sm border border-brand-border bg-brand-light-cream p-3 transition-colors hover:border-brand-sand"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-brand-cream">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] text-brand-olive uppercase">
                  {item.category}
                </p>
                <p className="mt-1 font-serif text-lg font-medium text-brand-charcoal group-hover:text-brand-primary">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-brand-muted">
                  {item.samplePrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
