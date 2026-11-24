export default function BrandWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center overflow-hidden select-none"
    >
      <div className="flex flex-col items-center justify-center -rotate-12 opacity-[0.045]">
        <span className="font-serif text-[20vw] leading-none font-semibold tracking-[0.26em] text-brand-charcoal uppercase">
          TRAYO
        </span>
        <span className="mt-2 font-sans text-[2vw] font-medium tracking-[0.45em] text-brand-primary uppercase">
          A Crunch of Goodness
        </span>
      </div>
    </div>
  );
}
