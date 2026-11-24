import { MARQUEE_ITEMS } from "@/lib/homeData";

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item, idx) => (
        <span
          key={`${item}-${idx}`}
          className="inline-flex items-center text-xs font-medium tracking-[0.22em] text-brand-cream uppercase sm:text-sm"
        >
          <span className="px-6 sm:px-8">{item}</span>
          <span aria-hidden="true" className="text-brand-sand">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ tone = "primary" }) {
  const bgClass =
    tone === "charcoal"
      ? "bg-brand-charcoal border-y border-brand-sand/20"
      : "bg-brand-primary";

  return (
    <div
      className={`marquee-group relative w-full overflow-hidden py-3.5 ${bgClass}`}
      aria-label="TRAYO brand highlights"
    >
      <div className="animate-trayo-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
