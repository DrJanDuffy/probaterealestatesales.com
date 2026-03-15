'use client';

import { useEffect, useState } from 'react';

const REALSCOUT_SCRIPT_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const LOAD_TIMEOUT_MS = 10000;

/**
 * Loads the RealScout web components script once and returns when it is ready.
 * Use on pages that render <realscout-office-listings> so the script is not loaded globally.
 */
export function useRealScoutScript(): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const existing = document.querySelector(`script[src="${REALSCOUT_SCRIPT_URL}"]`);
    if (existing) {
      if (customElements.get('realscout-office-listings')) {
        setLoaded(true);
        return;
      }
      existing.addEventListener('load', () => setLoaded(true));
      return;
    }

    let cancelled = false;
    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setLoaded(true);
    }, LOAD_TIMEOUT_MS);

    const script = document.createElement('script');
    script.src = REALSCOUT_SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      if (!cancelled) {
        window.clearTimeout(timeoutId);
        setLoaded(true);
      }
    };
    script.onerror = () => {
      if (!cancelled) {
        window.clearTimeout(timeoutId);
        setLoaded(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return loaded;
}
