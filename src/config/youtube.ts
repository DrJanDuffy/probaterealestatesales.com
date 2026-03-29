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
