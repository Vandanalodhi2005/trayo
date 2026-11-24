import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms of use and service guidelines for TRAYO.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal">
        Terms &amp; Conditions
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Draft terms of use — review and finalize with legal counsel before
        accepting live customer orders.
      </p>

      <div className="mt-10 space-y-8 border-t border-brand-border pt-8 text-sm leading-relaxed text-brand-muted">
        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Website Use &amp; Product Information
          </h2>
          <p className="mt-2">
            Product descriptions, sample prices, and pack weights currently
            displayed on this site are preview placeholders and may be updated
            prior to commercial launch.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Contact
          </h2>
          <p className="mt-2">
            Questions regarding these terms may be directed to us via our{" "}
            <Link
              href="/contact"
              className="text-brand-primary underline underline-offset-4"
            >
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
