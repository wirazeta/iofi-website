/**
 * Selamat Pagi mode — curated morning tweet image URLs from Iofi.
 * These replace YouTube thumbnails when the mode is enabled.
 * Add direct image URLs from Iofi's "Selamat Pagi" tweets.
 *
 * To get image URLs from a tweet:
 * Right-click the image → Copy image address → paste here.
 */

export const selamatPagiImages: string[] = [
  // Replace these placeholders with actual Selamat Pagi tweet image URLs.
  // Format: https://pbs.twimg.com/media/{id}?format=jpg&name=medium
  "https://pbs.twimg.com/media/GiP2wDtaAAArpyR?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GiKU-FNa0AA8fIp?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GiE0MsGbcAA9M1f?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Gh_Rk3faAAECi9r?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Gh5xEJ-akAAscBE?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Gh0PjWsagAA8LBC?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GhuoQJWa4AAfNkZ?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GhpHx2taIAAXp04?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GhjhilAbIAAkXbH?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Ghe7yTMaQAA1jDl?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GhaUuIxbYAAIb2o?format=jpg&name=medium",
  "https://pbs.twimg.com/media/GhVuOi_aUAAL3m_?format=jpg&name=medium",
];

/**
 * Deterministically pick a Selamat Pagi image for a video ID.
 * Same video always gets the same image.
 */
export function getSelamatPagiImage(videoId: string): string {
  if (selamatPagiImages.length === 0) return "";
  let hash = 0;
  for (let i = 0; i < videoId.length; i++) {
    hash = (hash * 31 + videoId.charCodeAt(i)) | 0;
  }
  return selamatPagiImages[Math.abs(hash) % selamatPagiImages.length];
}
