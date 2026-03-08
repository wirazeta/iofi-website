import { ioArtsTweets } from "@/data/tweets";
import { usePaginatedList } from "@/hooks/usePaginatedList";
import TweetCard from "@/components/TweetCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ARTS_PER_PAGE = 6;

export default function IoArts() {
  const { items, page, totalPages, nextPage, prevPage, hasNext, hasPrev } =
    usePaginatedList(ioArtsTweets, ARTS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">ioArts</h1>
        <p className="mt-1 text-muted-foreground">
          Fan art tagged with{" "}
          <a
            href="https://twitter.com/search?q=%23ioarts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary"
          >
            #ioarts
          </a>
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No ioArts curated yet. Add tweet IDs to <code>src/data/tweets.ts</code>.
        </div>
      ) : (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {items.map((id) => (
            <div key={id} className="break-inside-avoid">
              <TweetCard id={id} />
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="outline" size="sm" onClick={prevPage} disabled={!hasPrev}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" onClick={nextPage} disabled={!hasNext}>
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
