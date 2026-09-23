/**
 * Últimos vídeos de TikTok de Bistro Bar Calle 13.
 * Se actualiza automáticamente cada semana mediante una tarea programada.
 */

export interface TiktokVideo {
  id: string;
  url: string;
}

export const tiktokProfileUrl = "https://www.tiktok.com/@samuelmanzanaresv";

/** Los 3 últimos vídeos subidos (se omiten los fijados/anclados). */
export const tiktokVideos: TiktokVideo[] = [
  {
    id: "7688018273060801814",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7688018273060801814",
  },
  {
    id: "7687317431097806102",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7687317431097806102",
  },
  {
    id: "7687267399137103126",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7687267399137103126",
  },
];
