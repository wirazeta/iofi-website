import { Skeleton } from "@/components/ui/skeleton";

export default function ShortCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <Skeleton className="aspect-[9/16] w-full" />
    </div>
  );
}
