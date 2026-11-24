import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-olive uppercase">
        404 &middot; Page Not Found
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl">
        This page has wandered off
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">
        The page you are looking for may have been moved or no longer exists.
        Explore our makhana collection instead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="rounded-sm bg-brand-primary px-6 py-3 text-sm font-medium tracking-wider text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          Shop Collection
        </Link>
        <Link
          href="/"
          className="rounded-sm border border-brand-charcoal/30 px-6 py-3 text-sm font-medium tracking-wider text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
