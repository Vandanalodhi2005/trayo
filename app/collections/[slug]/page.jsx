import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/shop/ProductGrid";
import {
  COLLECTIONS,
  getCollectionBySlug,
  getProductsByCollection,
} from "@/lib/catalog";

export function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(collection.slug);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-b border-brand-border pb-10 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
            {collection.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal sm:text-5xl">
            {collection.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {collection.description}
          </p>
        </div>

        <Link
          href="/shop"
          className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase underline underline-offset-4 hover:text-brand-charcoal"
        >
          View All Makhana
        </Link>
      </div>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
