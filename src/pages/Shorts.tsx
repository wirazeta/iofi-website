import { useCallback } from "react";
import { useVideos } from "@/hooks/useVideos";
import { IOFI_CHANNEL_ID, HOLODEX_API_KEY } from "@/lib/constants";
import type { YoutubeVideo } from "@/api/youtube";
import ShortCard from "@/components/ShortCard";
import ShortCardSkeleton from "@/components/ShortCardSkeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const SHORTS_PER_PAGE = 50;
const MAX_SHORT_DURATION = 90;

export default function Shorts() {
  const filterShorts = useCallback(
    (video: YoutubeVideo) => video.duration > 0 && video.duration <= MAX_SHORT_DURATION,
    [],
  );

  const { videos, loading, error, hasMore, nextPage, prevPage, currentPage, offset } = useVideos({
    apiKey: HOLODEX_API_KEY,
    channelId: IOFI_CHANNEL_ID,
    limit: SHORTS_PER_PAGE,
    filterFn: filterShorts,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Shorts</h1>
        <p className="mt-1 text-muted-foreground">Short-form videos from Iofi</p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <ShortCardSkeleton key={i} />
          ))}
        </div>
      ) : videos.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No shorts found.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {videos.map((video) => (
            <ShortCard key={video.id} video={video} />
          ))}
        </div>
      )}

      {!loading && videos.length > 0 && (
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="outline" size="sm" onClick={prevPage} disabled={offset === 0}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">Page {currentPage}</span>
          <Button variant="outline" size="sm" onClick={nextPage} disabled={!hasMore}>
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
