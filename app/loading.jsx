export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-sand border-t-brand-primary" />
      <p className="mt-4 text-sm tracking-wide text-brand-muted">
        Preparing your TRAYO experience...
      </p>
    </div>
  );
}
