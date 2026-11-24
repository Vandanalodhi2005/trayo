"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState({ type: "idle", text: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        text: "Please complete your name, email address, and message.",
      });
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setFeedback({
      type: "unavailable",
      text: "Contact form delivery is not connected to a backend service yet. Your message was validated locally and not transmitted.",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-sm border border-brand-border bg-brand-light-cream p-6 sm:p-8"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold tracking-[0.16em] text-brand-charcoal uppercase"
        >
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Aarav Mehta"
          className="mt-2 h-11 w-full rounded-sm border border-brand-border bg-brand-cream/60 px-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-semibold tracking-[0.16em] text-brand-charcoal uppercase"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 h-11 w-full rounded-sm border border-brand-border bg-brand-cream/60 px-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold tracking-[0.16em] text-brand-charcoal uppercase"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for..."
          className="mt-2 w-full rounded-sm border border-brand-border bg-brand-cream/60 p-3.5 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-brand-white uppercase transition-colors hover:bg-brand-primary-hover"
      >
        Send Message
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>

      {feedback.text && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`text-xs leading-relaxed ${
            feedback.type === "error"
              ? "font-medium text-brand-primary"
              : "text-brand-muted"
          }`}
        >
          {feedback.text}
        </p>
      )}
    </form>
  );
}
