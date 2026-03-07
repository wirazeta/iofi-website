import { generalTweets } from "@/data/tweets";
import { usePaginatedList } from "@/hooks/usePaginatedList";
import TweetCard from "@/components/TweetCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TWEETS_PER_PAGE = 6;

export default function Tweets() {
  const { items, page, totalPages, nextPage, prevPage, hasNext, hasPrev } =
    usePaginatedList(generalTweets, TWEETS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tweets</h1>
        <p className="mt-1 text-muted-foreground">
          Latest posts from{" "}
          <a
            href="https://twitter.com/airaniiofifteen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary"
          >
            @airaniiofifteen
          </a>
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No tweets curated yet. Add tweet IDs to <code>src/data/tweets.ts</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((id) => (
            <TweetCard key={id} id={id} />
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
