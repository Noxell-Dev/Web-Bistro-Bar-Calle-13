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
    id: "7595959831614229782",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7595959831614229782",
  },
  {
    id: "7686558795022994710",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7686558795022994710",
  },
  {
    id: "7685466251379985686",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7685466251379985686",
  },
];
