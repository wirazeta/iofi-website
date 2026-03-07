import type { YoutubeVideo } from "@/api/youtube";
import { getThumbnailUrl, formatDuration, formatDate } from "@/lib/format";
import { getSelamatPagiImage } from "@/lib/selamat-pagi";
import { useSelamatPagi } from "@/context/SelamatPagiContext";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  video: YoutubeVideo;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { enabled: pagiMode } = useSelamatPagi();
  const thumbnail = pagiMode
    ? getSelamatPagiImage(video.id)
    : getThumbnailUrl(video.id);
  const isLive = video.status === "live";
  const isUpcoming = video.status === "upcoming";

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 no-underline"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {pagiMode && (
          <div className="absolute left-2 top-2">
            <Badge className="bg-yellow-500 text-white text-xs">☀ Pagi!</Badge>
          </div>
        )}
        <div className="absolute bottom-2 right-2">
          {isLive ? (
            <Badge className="bg-red-600 text-white">● LIVE</Badge>
          ) : isUpcoming ? (
            <Badge className="bg-blue-600 text-white">Upcoming</Badge>
          ) : (
            <span className="rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">
              {formatDuration(video.duration)}
            </span>
          )}
        </div>
        {!pagiMode && video.topic_id && (
          <div className="absolute left-2 top-2">
            <Badge variant="secondary" className="text-xs capitalize">
              {video.topic_id.replace(/_/g, " ")}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          {video.title}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground">
          {formatDate(video.available_at)}
        </p>
      </div>
    </a>
  );
}
