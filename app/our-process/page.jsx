import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Goodness",
  description:
    "How TRAYO approaches grading, slow roasting, balanced seasoning, and mindful packaging.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Careful Selection",
    description:
      "We start with evenly sized, light lotus seeds so every handful roasts uniformly and delivers a clean, airy snap.",
  },
  {
    step: "02",
    title: "Gentle Roasting",
    description:
      "Controlled, small-batch roasting helps preserve the natural crispness of makhana without feeling heavy or greasy.",
  },
  {
    step: "03",
    title: "Balanced Seasoning",
    description:
      "From mineral pink salt to cooling pudina and cracked pepper, seasonings are tumbled gently to complement—not mask—the base crunch.",
  },
  {
    step: "04",
    title: "Freshness First",
    description:
      "Packed in small batches to keep humidity out and preserve that crisp, just-roasted texture until you open the pack.",
  },
];

export default function OurProcessPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand-olive uppercase">
          Our Goodness
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-brand-charcoal sm:text-5xl">
          Goodness is in the details.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Every TRAYO pack is shaped by restraint—simple ingredients, careful
          roasting, and flavours made for everyday enjoyment.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROCESS_STEPS.map((item) => (
          <div
            key={item.step}
            className="rounded-sm border border-brand-border bg-brand-light-cream p-8"
          >
            <span className="font-serif text-2xl font-medium text-brand-primary">
              {item.step}
            </span>
            <h2 className="mt-4 font-serif text-2xl font-medium text-brand-charcoal">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          Shop the Collection
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
