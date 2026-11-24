"use client";

import Link from "next/link";

export default function ErrorPage({ reset }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
        Something went wrong
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">
        An unexpected error occurred while rendering this view. Please try again
        or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-sm bg-brand-primary px-6 py-3 text-sm font-medium tracking-wider text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-sm border border-brand-charcoal/30 px-6 py-3 text-sm font-medium tracking-wider text-brand-charcoal uppercase transition-colors hover:bg-brand-surface"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
