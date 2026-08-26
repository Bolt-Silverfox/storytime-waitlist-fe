import * as Sentry from "@sentry/nextjs";

// Client-side-only Sentry. We deliberately do NOT add server/edge
// instrumentation (instrumentation.ts + sentry.server/edge.config): under
// Next.js 16 + Turbopack the OpenTelemetry-based server hook fails to resolve
// `require-in-the-middle` and 500s every SSR request. This waitlist site is a
// thin marketing/squeeze frontend, so browser error + tracing capture is the
// gap; the waitlist backend reports to its own Sentry project.
Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://990ed519523000159f86877c1464bce8@o4510959000616960.ingest.us.sentry.io/4511977889005568",
  environment:
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ?? process.env.NODE_ENV,
  // Only report from real deployments, not local dev.
  enabled: process.env.NODE_ENV === "production",
  // Light performance sampling; errors are always captured.
  tracesSampleRate: 0.1,
});

// Instruments App Router client-side navigations for tracing.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
