import Link from "next/link";
import { BRAND, FOOTER_COLUMNS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-charcoal text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-[0.22em] text-brand-white uppercase"
            >
              {BRAND.name}
            </Link>
            <p className="mt-3 font-serif text-base italic text-brand-sand">
              {BRAND.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-cream/80">
              {BRAND.description}
            </p>
            <div className="mt-6 space-y-1.5 text-xs text-brand-sand">
              <p>Contact Placeholder: {BRAND.email}</p>
              <p>Social Links: Instagram &middot; Facebook (Coming Soon)</p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-brand-sand uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-cream/80 transition-colors hover:text-brand-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-sand/20 pt-8 text-xs text-brand-cream/70 sm:flex-row sm:items-center">
          <p>&copy; 2026 {BRAND.name}. All rights reserved.</p>
          <p>Crafted in India &middot; A Crunch of Goodness</p>
        </div>
      </div>
    </footer>
  );
}
