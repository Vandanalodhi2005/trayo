import ContactForm from "@/components/contact/ContactForm";
import { BRAND } from "@/lib/constants";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TRAYO for product questions, bulk gifting inquiries, or feedback.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary uppercase">
            Contact TRAYO
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal sm:text-5xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Questions about our makhana flavours, wholesale enquiries, or
            feedback on your crunch? Reach out below.
          </p>

          <div className="mt-8 space-y-3 border-t border-brand-border pt-6 text-sm text-brand-muted">
            <p>
              <span className="font-medium text-brand-charcoal">
                Email (Placeholder):{" "}
              </span>
              {BRAND.email}
            </p>
            <p>
              <span className="font-medium text-brand-charcoal">Region: </span>
              {BRAND.location}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
