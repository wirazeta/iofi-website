import { useState } from "react";
import { useClips } from "@/hooks/useClips";
import { IOFI_CHANNEL_ID, HOLODEX_API_KEY } from "@/lib/constants";
import ClipCard from "@/components/ClipCard";
import VideoCardSkeleton from "@/components/VideoCardSkeleton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const CLIPS_PER_PAGE = 12;

const LANG_OPTIONS = [
  { value: "all", label: "All Languages" },
  { value: "en", label: "English" },
  { value: "id", label: "Indonesian" },
  { value: "ja", label: "Japanese" },
];

export default function Clips() {
  const [lang, setLang] = useState("all");

  const { clips, loading, error, hasMore, nextPage, prevPage, currentPage, offset } = useClips({
    apiKey: HOLODEX_API_KEY,
    channelId: IOFI_CHANNEL_ID,
    limit: CLIPS_PER_PAGE,
    lang,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clips</h1>
          <p className="mt-1 text-muted-foreground">Community clips & highlights of Iofi</p>
        </div>

        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Filter language" />
          </SelectTrigger>
          <SelectContent>
            {LANG_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Error state */}
      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Clips grid */}
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: CLIPS_PER_PAGE }).map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))}
        </div>
      ) : clips.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No clips found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && clips.length > 0 && (
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
