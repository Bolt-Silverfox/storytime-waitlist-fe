export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-1 items-center justify-center py-32"
    >
      <div className="border-primary size-10 animate-spin rounded-full border-4 border-t-transparent" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
