/**
 * Textos de la interfaz en español.
 * Proyecto monolingüe (ES): si algún día se añade inglés, crear `en.ts`
 * con la misma forma y activar el routing i18n en `astro.config.mjs`.
 */

export const es = {
  seo: {
    title: "Bistro Bar Calle 13 | Cocina del mar y de la dehesa",
    description:
      "Tapas, carnes ibéricas a la brasa, pescaíto frito y postres caseros en Bistro Bar Calle 13. Del mar y de la dehesa a tu mesa. Reserva tu mesa: 673 895 151.",
  },

  a11y: {
    skipLink: "Saltar al contenido",
  },

  header: {
    nav: [
      { label: "Carta", href: "#carta" },
      { label: "Galería", href: "#galeria" },
      { label: "Reseñas", href: "#resenas" },
      { label: "Vídeos", href: "#videos" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Llamar",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },

  hero: {
    titleBusiness: "Bistro Bar Calle 13",
    titleClaim: "Del mar y de la dehesa a tu mesa.",
    subtitle:
      "Tapas, carnes ibéricas a la brasa, pescaíto frito y postres de la casa. Cocina honesta para compartir en buena compañía.",
    primaryCta: "Ver la carta",
    secondaryCta: "Llamar para reservar",
    logoAlt:
      "Logotipo de Bistro Bar Calle 13: calamar y toro flanqueando un tenedor y un cuchillo, sobre una cinta que dice Calle 13",
  },

  stats: {
    title: "La casa en cifras",
    items: [
      { value: "+60", label: "platos en carta" },
      { value: "2,50 €", label: "tapas desde" },
      { value: "100%", label: "postres de la casa" },
      { value: "6", label: "días a la semana" },
    ],
  },

  carta: {
    eyebrow: "La carta",
    title: "Toda la carta, con precios",
    subtitle:
      "Esto es lo que servimos cada día. Precios en euros, IVA incluido.",
    halfLabel: "1/2",
    fullLabel: "Ración",
  },

  gallery: {
    eyebrow: "Galería",
    title: "Platos de la casa",
    subtitle: "Una muestra de lo que sale de nuestra cocina.",
    images: [
      {
        src: "/images/galeria/chuleton-brasa.webp",
        alt: "Chuletón a la brasa fileteado, con patatas fritas y verduras salteadas",
        width: 885,
        height: 900,
      },
      {
        src: "/images/galeria/calamar-frito.webp",
        alt: "Calamar entero frito con ensalada, tomate y limón",
        width: 885,
        height: 900,
      },
      {
        src: "/images/galeria/arroz-negro.webp",
        alt: "Arroz negro con gambones servido en paella",
        width: 680,
        height: 510,
      },
      {
        src: "/images/galeria/calamar-algas.webp",
        alt: "Calamares fritos con ensalada de algas",
        width: 382,
        height: 510,
      },
      {
        src: "/images/galeria/filete-empanado.webp",
        alt: "Filete empanado con huevos fritos, patatas y pimientos",
        width: 382,
        height: 510,
      },
      {
        src: "/images/galeria/pulpo-brasa.webp",
        alt: "Pata de pulpo a la brasa con tomates cherry",
        width: 562,
        height: 510,
      },
    ],
  },

  reviews: {
    eyebrow: "Reseñas",
    title: "Lo que dicen nuestros clientes",
    subtitle: "Opiniones reales de quienes ya han pasado por nuestra casa.",
    googleLabel: "reseñas en Google",
    sourceLabel: "Reseña de Google",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Dudas habituales",
    items: [
      {
        q: "¿Hay que reservar mesa?",
        a: "No es imprescindible, pero si vienes en grupo o en fin de semana te recomendamos llamar al 673 895 151 y te guardamos sitio.",
      },
      {
        q: "¿Tienen platos para compartir?",
        a: "Sí, tenemos una sección entera «Para compartir»: patatas bravas, provolone, croquetas de cocido, de choco o de rabo de toro, gambas pil-pil y jamón ibérico BEHER, entre otros.",
      },
      {
        q: "¿Cuál es la especialidad de la casa?",
        a: "Lo que dice nuestro lema: del mar y de la dehesa. Del mar, el pescaíto frito, la tortilla de camarones, el atún rojo y la pata de pulpo; de la dehesa, las carnes ibéricas a la brasa y el chuletón de vaca rubia gallega madurada.",
      },
      {
        q: "¿Hacen tapas?",
        a: "Sí. Montaditos desde 2,50 €, pinchito de pollo, tostón de langostino o queso Camperito frito, además de tostas de sardina, aguacate o rulo de cabra.",
      },
      {
        q: "¿Los postres son caseros?",
        a: "Sí, la sección se llama «Postres de la casa» por algo: arroz con leche, tocinillo de cielo, flan de huevo, tarta de queso al horno y muerte por chocolate.",
      },
      {
        q: "¿Tienen información de alérgenos?",
        a: "Sí. Pregúntanos al hacer tu pedido y te informamos de los alérgenos de cada plato sin problema.",
      },
    ],
  },

  tiktok: {
    eyebrow: "Vídeos",
    title: "La casa, en vídeo",
    text: "Lo último de nuestro TikTok, actualizado cada semana.",
    profileCta: "Ver perfil en TikTok",
    profileUrl: "https://www.tiktok.com/@samuelmanzanaresv",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Reserva tu mesa",
    text: "Llámanos para reservar mesa, preguntar por la carta o encargar para un grupo. Te atendemos personalmente.",
    cta: "Llamar al 673 895 151",
    followUs: "Síguenos",
    hoursTitle: "Horario",
    closedLabel: "Cerrado",
    hours: [
      { day: "Lunes", time: "12:30 – 16:00 · 20:30 – 24:00" },
      { day: "Martes", time: "Cerrado" },
      { day: "Miércoles", time: "12:30 – 16:00 · 20:30 – 24:00" },
      { day: "Jueves", time: "12:30 – 16:00 · 20:30 – 24:00" },
      { day: "Viernes", time: "12:30 – 16:00 · 20:30 – 24:00" },
      { day: "Sábado", time: "12:30 – 16:00 · 20:30 – 24:00" },
      { day: "Domingo", time: "12:30 – 16:00 · 20:30 – 24:00" },
    ],
  },

  footer: {
    tagline: "Del mar y de la dehesa a tu mesa.",
    navTitle: "Secciones",
    contactTitle: "Contacto",
    legalLabel: "Aviso legal",
    rights: "Todos los derechos reservados.",
    madeBy: "Hecho con ♥ por",
  },

  e404: {
    title: "Página no encontrada",
    message: "La página que buscas no existe o ha cambiado de dirección.",
    backHome: "Volver al inicio",
  },

  legal: {
    backHome: "Volver al inicio",
  },
};

export type Strings = typeof es;
