"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, ShoppingBag, User, X } from "lucide-react";
import { BRAND, PRIMARY_NAV_LINKS } from "@/lib/constants";

export default function MobileNavDrawer({ isOpen, onClose }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-charcoal/50"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={shouldReduceMotion ? { x: 0 } : { x: "-100%" }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? { x: 0 } : { x: "-100%" }}
            transition={{
              type: "tween",
              duration: shouldReduceMotion ? 0 : 0.25,
              ease: "easeOut",
            }}
            className="relative flex h-full w-full max-w-xs flex-col bg-brand-cream text-brand-charcoal shadow-xl"
          >
            <div className="flex h-16 items-center justify-between border-b border-brand-border px-5">
              <span className="font-serif text-xl font-semibold tracking-[0.22em] uppercase">
                {BRAND.name}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-brand-charcoal transition-colors hover:bg-brand-surface hover:text-brand-primary"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                {PRIMARY_NAV_LINKS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-brand-surface text-brand-primary"
                            : "text-brand-charcoal hover:bg-brand-surface hover:text-brand-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 border-t border-brand-border pt-6">
                <p className="px-3 text-xs font-medium tracking-widest text-brand-muted uppercase">
                  Account & Bag
                </p>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      href="/account"
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium text-brand-charcoal hover:bg-brand-surface hover:text-brand-primary"
                    >
                      <User className="h-4 w-4" aria-hidden="true" />
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wishlist"
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium text-brand-charcoal hover:bg-brand-surface hover:text-brand-primary"
                    >
                      <Heart className="h-4 w-4" aria-hidden="true" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cart"
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium text-brand-charcoal hover:bg-brand-surface hover:text-brand-primary"
                    >
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      Shopping Bag
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="border-t border-brand-border px-5 py-4 text-xs text-brand-muted">
              <p className="font-serif italic text-brand-charcoal">{BRAND.tagline}</p>
              <p className="mt-1">{BRAND.location}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
