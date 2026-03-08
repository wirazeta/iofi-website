import type { YoutubeVideo } from "@/api/youtube";
import { getMaxResThumbnailUrl, formatDuration } from "@/lib/format";

interface ShortCardProps {
  video: YoutubeVideo;
}

export default function ShortCard({ video }: ShortCardProps) {
  const thumbnail = getMaxResThumbnailUrl(video.id);

  return (
    <a
      href={`https://www.youtube.com/shorts/${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 no-underline"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2">
          <span className="rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">
            {formatDuration(video.duration)}
          </span>
        </div>
        {/* Gradient overlay at bottom for title readability */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white">
            {video.title}
          </h3>
        </div>
      </div>
    </a>
  );
}
