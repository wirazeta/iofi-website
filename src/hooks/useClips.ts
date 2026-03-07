import { useState, useEffect, useCallback } from "react";
import { fetchClips, type YoutubeVideo } from "@/api/youtube";

interface UseClipsOptions {
  apiKey: string;
  channelId: string;
  limit: number;
  lang?: string;
}

export function useClips(options: UseClipsOptions) {
  const { apiKey, channelId, limit, lang } = options;
  const [clips, setClips] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const load = useCallback(async (currentOffset: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchClips({
        apiKey,
        channelId,
        offset: currentOffset,
        limit,
        lang,
      });
      setClips(data);
      setHasMore(data.length >= limit);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch clips");
    } finally {
      setLoading(false);
    }
  }, [apiKey, channelId, limit, lang]);

  useEffect(() => {
    setOffset(0);
  }, [lang]);

  useEffect(() => {
    load(offset);
  }, [offset, load]);

  const nextPage = () => setOffset((prev) => prev + limit);
  const prevPage = () => setOffset((prev) => Math.max(0, prev - limit));
  const currentPage = Math.floor(offset / limit) + 1;

  return { clips, loading, error, hasMore, nextPage, prevPage, currentPage, offset };
}
