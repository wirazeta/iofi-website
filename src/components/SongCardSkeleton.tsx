import { Skeleton } from "@/components/ui/skeleton";

export default function SongCardSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden rounded-xl border bg-card p-3 shadow-sm">
      <Skeleton className="aspect-video w-40 shrink-0 rounded-lg sm:w-52" />
      <div className="flex min-w-0 flex-1 flex-col justify-center space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}
