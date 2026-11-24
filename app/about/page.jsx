import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story",
  description:
    "Discover the story behind TRAYO—a modern Indian makhana brand built around quiet care and everyday snacking rituals.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
            About TRAYO
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-brand-charcoal sm:text-5xl">
            A better little everyday ritual.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            TRAYO began with a simple observation: the snacks we reach for
            every day rarely feel both light and genuinely satisfying. We set
            out to give Indian makhana—puffed lotus seeds long cherished in
            home kitchens—a thoughtful, contemporary expression.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            No loud gimmicks, no heavy coatings. Just crisp, airy fox nuts,
            honest pantry seasonings, and flavours crafted to sit comfortably
            beside your morning tea, desk-side focus, or evening conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/our-process"
              className="inline-flex items-center rounded-sm border border-brand-charcoal/30 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
            >
              Our Goodness
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-sm border border-brand-border bg-brand-light-cream p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/story-ritual.jpg"
                alt="Roasted TRAYO makhana served in a stoneware dish next to a cup of tea"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
