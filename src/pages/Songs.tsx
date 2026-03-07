import { useVideos } from "@/hooks/useVideos";
import { IOFI_CHANNEL_ID, HOLODEX_API_KEY } from "@/lib/constants";
import SongCard from "@/components/SongCard";
import SongCardSkeleton from "@/components/SongCardSkeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const SONGS_PER_PAGE = 10;

export default function Songs() {
  const { videos, loading, error, hasMore, nextPage, prevPage, currentPage, offset } = useVideos({
    apiKey: HOLODEX_API_KEY,
    channelId: IOFI_CHANNEL_ID,
    limit: SONGS_PER_PAGE,
    topic: "singing",
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Songs</h1>
        <p className="mt-1 text-muted-foreground">
          Original songs, cover MVs & singing streams
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: SONGS_PER_PAGE }).map((_, i) => (
            <SongCardSkeleton key={i} />
          ))}
        </div>
      ) : videos.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No songs found.
        </div>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <SongCard key={video.id} video={video} />
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
