export function track(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  const gtagFn = window.gtag;
  if (typeof gtagFn !== "function") return;
  try {
    // @ts-ignore
    window.gtag("event", event, params || {});
  } catch {
    // no-op
  }
}
