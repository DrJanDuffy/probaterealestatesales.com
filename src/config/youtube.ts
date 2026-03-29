/**
 * YouTube channel (Studio → Settings → Advanced settings).
 * Prefer channel ID URLs in JSON-LD sameAs; @handle links are fine for visible CTAs.
 */

/** Channel ID (starts with UC). */
export const YOUTUBE_CHANNEL_ID = 'UCIMieP7FSUSwN0vw8FVNprA' as const;

/** Legacy user id (Studio); rarely needed for embeds/APIs — channel ID is canonical. */
export const YOUTUBE_CHANNEL_LEGACY_USER_ID = 'IMieP7FSUSwN0vw8FVNprA' as const;

/** Stable channel page URL. */
export const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`;

/** Handle URL (marketing-friendly). */
export const YOUTUBE_CHANNEL_HANDLE_URL = 'https://www.youtube.com/@drjanduffy';

/**
 * Uploads playlist id: replace leading `UC` with `UU` on the channel id.
 * Used for `videoseries` embed (latest uploads).
 */
export const YOUTUBE_UPLOADS_PLAYLIST_ID = 'UUIMieP7FSUSwN0vw8FVNprA' as const;

/**
 * Privacy-enhanced embed host (limits third-party cookies in the iframe per Google).
 * @see https://support.google.com/youtube/answer/171780
 */
const YOUTUBE_EMBED_ORIGIN = 'https://www.youtube-nocookie.com' as const;

export const YOUTUBE_EMBED_UPLOADS_SRC =
  `${YOUTUBE_EMBED_ORIGIN}/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST_ID}&rel=0` as const;

/**
 * Primary video for `/blog/probate-videos/` (watch page + VideoObject).
 * Update periodically from channel RSS: `https://www.youtube.com/feeds/videos.xml?channel_id=<CHANNEL_ID>`
 */
export const YOUTUBE_FEATURED_VIDEO_ID = 'kEyg6JtCltY' as const;

export const YOUTUBE_FEATURED_WATCH_URL =
  `https://www.youtube.com/watch?v=${YOUTUBE_FEATURED_VIDEO_ID}` as const;

export const YOUTUBE_FEATURED_EMBED_SRC =
  `${YOUTUBE_EMBED_ORIGIN}/embed/${YOUTUBE_FEATURED_VIDEO_ID}?rel=0` as const;

export const YOUTUBE_FEATURED_THUMB =
  `https://i.ytimg.com/vi/${YOUTUBE_FEATURED_VIDEO_ID}/hqdefault.jpg` as const;

export const YOUTUBE_FEATURED_TITLE = 'Dr. Jan Duffy, REALTOR | Client Testimonial!' as const;

/** Plain text for VideoObject.description (from YouTube listing; keep in sync when changing featured id). */
export const YOUTUBE_FEATURED_DESCRIPTION =
  'Interview with Dr. Jan Duffy from Berkshire Hathaway HomeServices—real estate tips for buyers and sellers in Las Vegas.' as const;

/** ISO 8601 — matches YouTube published date for this video. */
export const YOUTUBE_FEATURED_UPLOAD_DATE = '2025-08-20T20:03:27+00:00' as const;
