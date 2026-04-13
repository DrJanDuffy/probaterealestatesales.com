'use client';

import { CalendlyInlineEmbed } from '@/components/calendly/CalendlyInlineEmbed';
import { CalendlyScheduleButton } from '@/components/calendly/CalendlyScheduleButton';

type CalendlyBookingPanelProps = {
  title: string;
  description?: string;
  /** Height for the inline embed (px). */
  embedMinHeight?: number;
  className?: string;
  embedClassName?: string;
  showPopupFallback?: boolean;
};

/**
 * Reusable Calendly-first block: inline calendar + optional popup trigger (for pages that replace
 * legacy contact/lead forms).
 */
export function CalendlyBookingPanel({
  title,
  description,
  embedMinHeight = 650,
  className = '',
  embedClassName = 'mx-auto max-w-4xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg',
  showPopupFallback = true,
}: CalendlyBookingPanelProps) {
  return (
    <div className={className}>
      <h3 className="text-2xl font-semibold text-secondary-900 mb-2 text-center">{title}</h3>
      {description ? (
        <p className="text-secondary-600 text-center mb-6 max-w-2xl mx-auto">{description}</p>
      ) : null}
      <CalendlyInlineEmbed minHeight={embedMinHeight} className={embedClassName} />
      {showPopupFallback ? (
        <p className="text-center mt-4">
          <CalendlyScheduleButton variant="outline" />
        </p>
      ) : null}
    </div>
  );
}
