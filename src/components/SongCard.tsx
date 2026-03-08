import type { YoutubeVideo } from "@/api/youtube";
import { getThumbnailUrl, formatDuration, formatDate } from "@/lib/format";
import { getSelamatPagiImage } from "@/lib/selamat-pagi";
import { useSelamatPagi } from "@/context/SelamatPagiContext";
import { Music } from "lucide-react";

interface SongCardProps {
  video: YoutubeVideo;
}

export default function SongCard({ video }: SongCardProps) {
  const { enabled: pagiMode } = useSelamatPagi();
  const thumbnail = pagiMode
    ? getSelamatPagiImage(video.id)
    : getThumbnailUrl(video.id);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 overflow-hidden rounded-xl border bg-card p-3 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 no-underline"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-lg bg-muted sm:w-52">
        <img
          src={thumbnail}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-1.5 right-1.5">
          <span className="rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">
            {formatDuration(video.duration)}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex items-center gap-1.5 text-pink-500">
          <Music className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">Music Video</span>
        </div>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          {video.title}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {formatDate(video.available_at)}
        </p>
      </div>
    </a>
  );
}
