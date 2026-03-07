import { Skeleton } from "@/components/ui/skeleton";

export default function TweetCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-3 w-24" />
    </div>
  );
}
