import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Shopping Bag",
  description: "Review your TRAYO makhana shopping bag.",
};

export default function CartPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-light-cream text-brand-primary">
        <ShoppingBag className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
        Shopping Bag &middot; Coming Soon
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl">
        Your TRAYO Bag
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-brand-muted sm:text-base">
        Persistent shopping bag state, quantity adjustments, and server-verified
        Razorpay checkout are currently being integrated. In the meantime, you
        can browse all TRAYO flavours in our shop.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          Browse Makhana
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/"
          className="rounded-sm border border-brand-charcoal/30 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
