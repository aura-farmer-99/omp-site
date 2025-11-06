const isConfigured = Boolean(
  import.meta.env.VITE_PLAUSIBLE_DOMAIN ||
    import.meta.env.VITE_GA4_ID ||
    import.meta.env.VITE_META_PIXEL_ID
);

export const track = (event: string, props?: Record<string, unknown>) => {
  if (!isConfigured) return;

  if (import.meta.env.VITE_PLAUSIBLE_DOMAIN && window.plausible) {
    window.plausible(event, { props });
  }

  if (import.meta.env.VITE_GA4_ID && window.gtag) {
    window.gtag("event", event, props);
  }
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
