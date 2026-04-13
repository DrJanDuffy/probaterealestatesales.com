'use client';

import { useEffect, useRef } from 'react';
import { CalendlyScheduleButton } from '@/components/calendly/CalendlyScheduleButton';
import { CALENDLY_SCHEDULE_URL } from '@/config/calendly';

/**
 * Full Calendly inline embed (site-wide footer). Uses `initInlineWidget` when available so the
 * calendar mounts after `widget.js` loads (avoids race with declarative `.calendly-inline-widget`).
 */
export function CalendlyFooterInline() {
  const containerRef = useRef<HTMLElement | null>(null);
  const didInitRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tryInit = (): boolean => {
      if (didInitRef.current || !containerRef.current) return true;
      const Calendly = typeof window !== 'undefined' ? window.Calendly : undefined;
      if (!Calendly?.initInlineWidget) return false;
      containerRef.current.innerHTML = '';
      Calendly.initInlineWidget({
        url: CALENDLY_SCHEDULE_URL,
        parentElement: containerRef.current,
      });
      didInitRef.current = true;
      return true;
    };

    if (tryInit()) return;

    const interval = window.setInterval(() => {
      if (tryInit()) {
        window.clearInterval(interval);
      }
    }, 100);

    const timeout = window.setTimeout(() => {
      window.clearInterval(interval);
    }, 15000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="col-span-full mt-10 pt-10 border-t border-secondary-800">
      <h3 className="text-center text-lg font-semibold text-primary-400 mb-1">
        Schedule a 15-minute conversation
      </h3>
      <p className="text-center text-secondary-400 text-sm mb-6 max-w-2xl mx-auto">
        Choose a time below, or use the floating button. You can also open the same calendar in a
        popup.
      </p>
      <section
        ref={containerRef}
        className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-secondary-700 bg-secondary-950 shadow-lg"
        style={{ minWidth: 320, height: 700 }}
        aria-label="Calendly scheduling"
      />
      <p className="text-center mt-6">
        <CalendlyScheduleButton variant="footerLink" />
      </p>
    </div>
  );
}
