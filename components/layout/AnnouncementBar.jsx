import Link from "next/link";
import { ANNOUNCEMENT_TEXT } from "@/lib/constants";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-charcoal text-brand-cream border-b border-brand-sand/20">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase sm:text-xs">
          {ANNOUNCEMENT_TEXT}{" "}
          <Link
            href="/shop"
            className="ml-2 text-brand-sand underline decoration-brand-sand/70 underline-offset-4 transition-colors hover:text-brand-white"
          >
            Shop Now
          </Link>
        </p>
      </div>
    </div>
  );
}
