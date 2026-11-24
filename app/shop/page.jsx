import { Suspense } from "react";
import ShopCatalog from "@/components/shop/ShopCatalog";
import { getAllProducts } from "@/lib/catalog";

export const metadata = {
  title: "Shop All Makhana",
  description:
    "Explore TRAYO's collection of raw and small-batch flavoured makhana crafted for everyday snacking.",
};

async function ShopContent({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialQuery =
    typeof resolvedSearchParams?.q === "string" ? resolvedSearchParams.q : "";
  const products = getAllProducts();

  return <ShopCatalog products={products} initialQuery={initialQuery} />;
}

export default function ShopPage({ searchParams }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary uppercase">
          TRAYO Pantry
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal sm:text-5xl">
          Shop All Makhana
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Light, airy fox nuts in pure raw and balanced flavoured varieties.
          Prices shown are sample placeholders while checkout integration is
          being finalized.
        </p>
      </div>

      <div className="mt-10">
        <Suspense
          fallback={
            <div className="py-12 text-sm text-brand-muted">
              Loading collection...
            </div>
          }
        >
          <ShopContent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
