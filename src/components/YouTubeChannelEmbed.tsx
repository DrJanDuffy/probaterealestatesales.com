import { YOUTUBE_EMBED_UPLOADS_SRC } from '@/config/youtube';

type YouTubeChannelEmbedProps = {
  /** Must match `aria-labelledby` on the section for a11y. */
  sectionHeadingId?: string;
  className?: string;
};

/**
 * Server-safe channel uploads playlist embed (privacy-enhanced domain in {@link YOUTUBE_EMBED_UPLOADS_SRC}).
 */
export function YouTubeChannelEmbed({
  sectionHeadingId = 'youtube-channel-latest-heading',
  className = 'py-12 bg-gray-100 border-y border-gray-200',
}: YouTubeChannelEmbedProps) {
  return (
    <section className={className} aria-labelledby={sectionHeadingId}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id={sectionHeadingId}
          className="text-2xl font-bold text-gray-900 text-center mb-6 scroll-mt-24"
        >
          Latest from the channel
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-black aspect-video">
          <iframe
            title="Dr. Jan Duffy — recent YouTube uploads"
            src={YOUTUBE_EMBED_UPLOADS_SRC}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
          Opens in privacy-enhanced mode. The playlist updates when new videos are published on the
          channel.
        </p>
      </div>
    </section>
  );
}
