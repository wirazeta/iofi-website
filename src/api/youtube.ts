import axios, { type AxiosResponse } from "axios";

export interface YoutubeVideo {
    id: string,
    title: string,
    topic_id: string,
    published_at: string,
    available_at: string,
    duration: number,
    status: string,
    channel: {
        id: string,
        name: string,
        org: string,
        suborg: string,
        type: string,
        photo: string,
        english_name: string
    }
}

export interface YoutubeLivestream extends YoutubeVideo {
    live_viewers: number,
    start_actual: string,
    start_schedule: string
}

export async function fetchLatestVideo(apiKey: string, channel_id: string, offset: number): Promise<YoutubeVideo[] | string> {
    const response: AxiosResponse<YoutubeVideo[]> = await axios.get<YoutubeVideo[]>("https://holodex.net/api/v2/videos",{
        headers: {
            'X-APIKEY': apiKey,
        },
        params: {
            channel_id:channel_id,
            limit: 5,
            offset: offset
        }
    }).then(data => {
        return data;
    });

    if(response.status !== 200) {
        return JSON.stringify({
            "data": response.data,
            "status": response.status,
            "message": response.statusText
        });
    }
    return response.data
}