import type { YoutubeVideo } from "@/api/youtube";
import { getThumbnailUrl, formatDuration, formatDate } from "@/lib/format";
import { getSelamatPagiImage } from "@/lib/selamat-pagi";
import { useSelamatPagi } from "@/context/SelamatPagiContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ClipCardProps {
  clip: YoutubeVideo;
}

export default function ClipCard({ clip }: ClipCardProps) {
  const { enabled: pagiMode } = useSelamatPagi();
  const thumbnail = pagiMode
    ? getSelamatPagiImage(clip.id)
    : getThumbnailUrl(clip.id);
  const clipperName = clip.channel.english_name || clip.channel.name;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${clip.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 no-underline"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={clip.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {pagiMode && (
          <div className="absolute left-2 top-2">
            <Badge className="bg-yellow-500 text-white text-xs">☀ Pagi!</Badge>
          </div>
        )}
        <div className="absolute bottom-2 right-2">
          <span className="rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">
            {formatDuration(clip.duration)}
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          {clip.title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={clip.channel.photo} alt={clipperName} />
            <AvatarFallback className="text-[10px]">
              {clipperName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="truncate text-xs text-muted-foreground">{clipperName}</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatDate(clip.available_at)}
        </p>
      </div>
    </a>
  );
}
