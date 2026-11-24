"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address (e.g. name@example.com).",
      });
      return;
    }

    setStatus({
      type: "unavailable",
      message:
        "Newsletter sign-up is not connected to a backend service yet. Your email was validated locally and not transmitted.",
    });
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="border-t border-brand-border bg-brand-cream py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand-primary uppercase">
          Stay Close
        </p>
        <h2
          id="newsletter-heading"
          className="mt-3 font-serif text-3xl font-medium text-brand-charcoal sm:text-4xl"
        >
          Good things in your inbox.
        </h2>
        <p className="mt-4 text-base text-brand-muted">
          Get the latest flavours, updates and little moments of goodness.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status.type !== "idle") {
                setStatus({ type: "idle", message: "" });
              }
            }}
            placeholder="you@example.com"
            aria-invalid={status.type === "error"}
            aria-describedby={
              status.message ? "newsletter-feedback" : undefined
            }
            className="h-12 flex-1 rounded-sm border border-brand-border bg-brand-light-cream px-4 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-brand-primary px-6 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
          >
            Subscribe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        {status.message && (
          <p
            id="newsletter-feedback"
            role={status.type === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`mt-4 text-xs leading-relaxed ${
              status.type === "error"
                ? "text-brand-primary font-medium"
                : "text-brand-muted"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
