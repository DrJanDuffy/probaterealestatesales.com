'use client';

import Script from 'next/script';
import { CALENDLY_SCHEDULE_URL } from '@/config/calendly';

/**
 * Loads Calendly once; initializes the floating badge. Inline embeds in the footer use the same script.
 */
export function CalendlyBadgeScript() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: CALENDLY_SCHEDULE_URL,
            text: 'Schedule time with me',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: false,
          });
        }
      }}
    />
  );
}
