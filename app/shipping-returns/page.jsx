import Link from "next/link";

export const metadata = {
  title: "Shipping & Returns",
  description:
    "Shipping timelines, delivery guidelines, and return policy information for TRAYO.",
};

export default function ShippingReturnsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
        Policies
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal">
        Shipping &amp; Returns
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Draft policy structure — update with final courier SLAs and return
        terms prior to live store launch.
      </p>

      <div className="mt-10 space-y-8 border-t border-brand-border pt-8 text-sm leading-relaxed text-brand-muted">
        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Order Dispatch &amp; Delivery
          </h2>
          <p className="mt-2">
            Orders are prepared in small batches and dispatched through partner
            couriers across India. Tracking details will be shared by email
            once order fulfillment is live.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Returns &amp; Damaged Packs
          </h2>
          <p className="mt-2">
            Because makhana is a consumable food product, opened packs are not
            eligible for return. If a parcel arrives damaged or incorrect,
            please reach out via our{" "}
            <Link
              href="/contact"
              className="text-brand-primary underline underline-offset-4"
            >
              Contact page
            </Link>{" "}
            within 48 hours of delivery.
          </p>
        </section>
      </div>
    </article>
  );
}
