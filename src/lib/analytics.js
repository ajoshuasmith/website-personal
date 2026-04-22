export function trackEvent(name, props) {
  if (typeof window === 'undefined' || !window.umami) return;
  if (props) window.umami.track(name, props);
  else window.umami.track(name);
}

export function installOutboundClickTracking() {
  if (typeof document === 'undefined') return;
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    let url;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      return;
    }
    if (url.origin === window.location.origin) return;
    trackEvent('outbound-click', { href: url.href });
  });
}
