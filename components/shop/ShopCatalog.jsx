"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductGrid from "@/components/shop/ProductGrid";
import { COLLECTIONS } from "@/lib/catalog";

export default function ShopCatalog({ products, initialQuery = "" }) {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCollection =
        selectedCollection === "all" ||
        product.collectionSlug === selectedCollection;

      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCollection && matchesQuery;
    });
  }, [products, selectedCollection, searchTerm]);

  return (
    <div>
      {/* Filter & Search Bar */}
      <div className="mb-10 flex flex-col gap-4 border-y border-brand-border py-5 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter by collection"
          className="flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            onClick={() => setSelectedCollection("all")}
            aria-pressed={selectedCollection === "all"}
            className={`rounded-sm px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
              selectedCollection === "all"
                ? "bg-brand-charcoal text-brand-white"
                : "border border-brand-border bg-brand-light-cream text-brand-charcoal hover:border-brand-primary"
            }`}
          >
            All ({products.length})
          </button>

          {COLLECTIONS.map((col) => (
            <button
              key={col.slug}
              type="button"
              onClick={() => setSelectedCollection(col.slug)}
              aria-pressed={selectedCollection === col.slug}
              className={`rounded-sm px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                selectedCollection === col.slug
                  ? "bg-brand-charcoal text-brand-white"
                  : "border border-brand-border bg-brand-light-cream text-brand-charcoal hover:border-brand-primary"
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="shop-search-input" className="sr-only">
            Filter products by name or flavour
          </label>
          <input
            id="shop-search-input"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter flavours..."
            className="h-10 w-full rounded-sm border border-brand-border bg-brand-light-cream px-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none md:w-64"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-xs font-medium text-brand-primary underline underline-offset-4 hover:text-brand-charcoal"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Collection Quick Links */}
      <div className="mb-8 flex flex-wrap items-center gap-4 text-xs text-brand-muted">
        <span>Browse dedicated collections:</span>
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            className="font-medium text-brand-primary underline decoration-brand-sand underline-offset-4 hover:text-brand-charcoal"
          >
            {col.name}
          </Link>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
