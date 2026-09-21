/**
 * Datos del negocio. Única fuente de verdad: los componentes,
 * el BaseLayout (SEO + JSON-LD) y las páginas tiran siempre de aquí.
 * Misma forma que en el resto de proyectos (ver prompt de landing pages, punto 10).
 */

export const site = {
  name: "Bistro Bar Calle 13",
  url: "https://calle13losbarrios.es",
  locale: "es_ES",
  language: "es",
  description:
    "Tapas, carnes ibéricas a la brasa, pescaíto frito y postres caseros en Bistro Bar Calle 13. Del mar y de la dehesa a tu mesa. Reserva tu mesa: 673 895 151.",
  tagline: "Del mar y de la dehesa a tu mesa",
  phones: [{ display: "673 895 151", href: "tel:+34673895151" }],
  address: {
    street: "Calle Padre Dámaso, 3",
    postalCode: "11370",
    locality: "Los Barrios",
    region: "Cádiz",
    country: "ES",
  },
  mapsUrl: "https://maps.app.goo.gl/Kt8qxrKDuZVsSLQZ8",
  reviewsUrl:
    "https://www.google.com/maps/place/Bistro+Bar+Calle+13+Los+Barrios+(+Samuel+Manzanares+)/@36.1809212,-5.4908174,17z/data=!4m8!3m7!1s0xd0ced2f368ed86b:0xe9fdf3f244f2168c!8m2!3d36.1809169!4d-5.4882425!9m1!1b1!16s%2Fg%2F11ln526g84?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
  // Nota y nº de reseñas de Google Maps; actualizar junto con src/data/reviews.ts.
  googleRating: {
    value: 4.6,
    reviewCount: 402,
  },
  social: [
    {
      icon: "instagram",
      label: "Instagram",
      handle: "@calle_13_losbarrios",
      url: "https://www.instagram.com/calle_13_losbarrios",
    },
    {
      icon: "facebook",
      label: "Facebook",
      handle: "Calle-13-Bistro-Bar",
      url: "https://www.facebook.com/profile.php?id=61570425544020",
    },
    {
      icon: "tiktok",
      label: "TikTok",
      handle: "@samuelmanzanaresv",
      url: "https://www.tiktok.com/@samuelmanzanaresv",
    },
  ],
} as const;

export type Site = typeof site;
