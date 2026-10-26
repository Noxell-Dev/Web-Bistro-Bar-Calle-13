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
    id: "7699955602889526550",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7699955602889526550",
  },
  {
    id: "7699217173423607062",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7699217173423607062",
  },
  {
    id: "7698445094533483779",
    url: "https://www.tiktok.com/@samuelmanzanaresv/video/7698445094533483779",
  },
];
