import { useState, useEffect, useCallback } from "react";
import { fetchVideos, type YoutubeVideo, type FetchVideosParams } from "@/api/youtube";

interface UseVideosOptions {
  apiKey: string;
  channelId: string;
  limit: number;
  status?: string;
  type?: string;
  topic?: string;
  filterFn?: (video: YoutubeVideo) => boolean;
}

export function useVideos(options: UseVideosOptions) {
  const { apiKey, channelId, limit, status, type, topic, filterFn } = options;
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const load = useCallback(async (currentOffset: number) => {
    setLoading(true);
    setError(null);
    try {
      const params: FetchVideosParams = {
        apiKey,
        channelId,
        offset: currentOffset,
        limit,
        status,
        type,
        topic,
      };
      const data = await fetchVideos(params);
      const filtered = filterFn ? data.filter(filterFn) : data;
      setVideos(filtered);
      setHasMore(data.length >= limit);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  }, [apiKey, channelId, limit, status, type, topic, filterFn]);

  useEffect(() => {
    setOffset(0);
  }, [status, type, topic]);

  useEffect(() => {
    load(offset);
  }, [offset, load]);

  const nextPage = () => setOffset((prev) => prev + limit);
  const prevPage = () => setOffset((prev) => Math.max(0, prev - limit));
  const currentPage = Math.floor(offset / limit) + 1;

  return { videos, loading, error, hasMore, nextPage, prevPage, currentPage, offset };
}
