"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { BRAND, PRIMARY_NAV_LINKS } from "@/lib/constants";
import MobileNavDrawer from "@/components/layout/MobileNavDrawer";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [openDrawerPath, setOpenDrawerPath] = useState(null);
  const [searchOpenPath, setSearchOpenPath] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuOpen = openDrawerPath === pathname;
  const searchOpen = searchOpenPath === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setSearchOpenPath(null);
    if (trimmed) {
      router.push(`/shop?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/shop");
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          isScrolled
            ? "bg-brand-cream/95 backdrop-blur-sm border-b border-brand-border"
            : "bg-brand-cream border-b border-brand-border/70"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Mobile Left Controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setOpenDrawerPath(pathname)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() =>
                setSearchOpenPath((prev) => (prev === pathname ? null : pathname))
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Brand Wordmark */}
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-[0.22em] text-brand-charcoal uppercase transition-colors hover:text-brand-primary sm:text-[1.65rem]"
            aria-label={`${BRAND.name} home`}
          >
            {BRAND.name}
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {PRIMARY_NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-brand-primary"
                      : "text-brand-charcoal hover:text-brand-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-brand-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Utility Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() =>
                setSearchOpenPath((prev) => (prev === pathname ? null : pathname))
              }
              className="hidden h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary lg:inline-flex"
              aria-label="Search products"
              aria-expanded={searchOpen}
            >
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <Link
              href="/account"
              className="hidden h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary sm:inline-flex"
              aria-label="Customer account"
            >
              <User className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>

            <Link
              href="/wishlist"
              className="hidden h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary sm:inline-flex"
              aria-label="Wishlist"
            >
              <Heart className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>

            <Link
              href="/cart"
              className="inline-flex h-10 items-center gap-1.5 rounded-sm px-2.5 text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline">
                Bag
              </span>
            </Link>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-brand-border bg-brand-white">
            <form
              onSubmit={handleSearchSubmit}
              role="search"
              aria-label="Search TRAYO makhana"
              className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 sm:px-6"
            >
              <Search
                className="h-4 w-4 shrink-0 text-brand-muted"
                aria-hidden="true"
              />
              <label htmlFor="header-search-input" className="sr-only">
                Search products
              </label>
              <input
                id="header-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roasted makhana, Himalayan salt, peri peri..."
                autoFocus
                className="w-full bg-transparent text-sm text-brand-charcoal placeholder:text-brand-muted focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-brand-primary px-4 py-1.5 text-xs font-medium tracking-wider text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpenPath(null)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-brand-muted hover:text-brand-charcoal"
                aria-label="Close search"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        )}
      </header>

      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setOpenDrawerPath(null)}
      />
    </>
  );
}
