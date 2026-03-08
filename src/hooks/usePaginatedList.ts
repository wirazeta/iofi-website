import { useMemo, useState } from "react";

export function usePaginatedList<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);

  const paginatedItems = useMemo(
    () => items.slice((page - 1) * pageSize, page * pageSize),
    [items, page, pageSize],
  );

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  return { items: paginatedItems, page, totalPages, nextPage, prevPage, hasNext, hasPrev };
}
