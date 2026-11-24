import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How TRAYO handles customer information and website privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-brand-muted">
        Draft privacy overview — update with your registered entity details and
        data protection officer contact before launch.
      </p>

      <div className="mt-10 space-y-8 border-t border-brand-border pt-8 text-sm leading-relaxed text-brand-muted">
        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Information We Collect
          </h2>
          <p className="mt-2">
            When e-commerce checkout and newsletter services are enabled, TRAYO
            will collect only the contact, shipping, and order details required
            to fulfill your request.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-brand-charcoal">
            Questions About Your Data
          </h2>
          <p className="mt-2">
            For any privacy-related questions, please reach out through our{" "}
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
