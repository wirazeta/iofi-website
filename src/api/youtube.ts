import axios from "axios";

export interface YoutubeVideo {
  id: string;
  title: string;
  topic_id: string;
  published_at: string;
  available_at: string;
  duration: number;
  status: string;
  type: string;
  channel: {
    id: string;
    name: string;
    org: string;
    suborg: string;
    type: string;
    photo: string;
    english_name: string;
  };
}

export interface YoutubeLivestream extends YoutubeVideo {
  live_viewers: number;
  start_actual: string;
  start_schedule: string;
}

export interface FetchVideosParams {
  apiKey: string;
  channelId: string;
  offset?: number;
  limit?: number;
  status?: string;
  type?: string;
  topic?: string;
  order?: "asc" | "desc";
}

export async function fetchVideos(params: FetchVideosParams): Promise<YoutubeVideo[]> {
  const { apiKey, channelId, offset = 0, limit = 12, status, type, topic, order = "desc" } = params;

  const response = await axios.get<YoutubeVideo[]>("https://holodex.net/api/v2/videos", {
    headers: { "X-APIKEY": apiKey },
    params: {
      channel_id: channelId,
      limit,
      offset,
      order,
      ...(status && { status }),
      ...(type && { type }),
      ...(topic && { topic }),
    },
  });

  return response.data;
}

export interface FetchClipsParams {
  apiKey: string;
  channelId: string;
  offset?: number;
  limit?: number;
  lang?: string;
}

export async function fetchClips(params: FetchClipsParams): Promise<YoutubeVideo[]> {
  const { apiKey, channelId, offset = 0, limit = 12, lang } = params;

  const response = await axios.get<YoutubeVideo[]>(
    `https://holodex.net/api/v2/channels/${channelId}/clips`,
    {
      headers: { "X-APIKEY": apiKey },
      params: {
        limit,
        offset,
        ...(lang && lang !== "all" && { lang }),
      },
    },
  );

  return response.data;
}
