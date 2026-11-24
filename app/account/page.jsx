import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

export const metadata = {
  title: "My Account",
  description: "Manage your TRAYO profile, saved addresses, and order history.",
};

export default function AccountPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-light-cream text-brand-primary">
        <User className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
        Customer Account &middot; Coming Soon
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl">
        Your TRAYO Account
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-brand-muted sm:text-base">
        Customer authentication, saved delivery addresses, and order history
        will be available here once backend account services are connected.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          Shop Makhana
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border border-brand-charcoal/30 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
        >
          Need Help?
        </Link>
      </div>
    </section>
  );
}
