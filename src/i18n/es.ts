/**
 * Textos de la interfaz en español.
 * Proyecto monolingüe (ES): si algún día se añade inglés, crear `en.ts`
 * con la misma forma y activar el routing i18n en `astro.config.mjs`.
 */

export const es = {
  site: {
    name: "Bistro Bar Calle 13",
    tagline: "Del mar y de la dehesa a tu mesa",
    group: "Grupo Hostelero Samuel Manzanares",
    phone: "673 895 151",
    phoneHref: "tel:+34673895151",
    // Dominio PROVISIONAL: confirmar el definitivo con el negocio.
    url: "https://bistrobarcalle13.es",
    locale: "es_ES",
  },

  seo: {
    title: "Bistro Bar Calle 13 | Cocina del mar y de la dehesa",
    description:
      "Tapas, carnes ibéricas a la brasa, pescaíto frito y postres caseros en Bistro Bar Calle 13. Del mar y de la dehesa a tu mesa. Reserva tu mesa: 673 895 151.",
  },

  header: {
    nav: [
      { label: "La carta", href: "#carta" },
      { label: "Servicios", href: "#servicios" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Llamar",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },

  hero: {
    eyebrow: "Bistro & Bar · Grupo Hostelero Samuel Manzanares",
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
      { value: "2", label: "mundos: el mar y la dehesa" },
    ],
  },

  services: {
    eyebrow: "Servicios",
    title: "Qué vas a encontrar",
    subtitle:
      "Una carta amplia pensada para picar, compartir o sentarse a comer en serio.",
    items: [
      {
        title: "Tapas y tostas",
        text: "Montaditos, tostón de langostino y tostas para abrir boca desde 2,50 €.",
        icon: "tapa",
      },
      {
        title: "Para compartir",
        text: "Bravas, provolone, croquetas y jamón ibérico BEHER en el centro de la mesa.",
        icon: "compartir",
      },
      {
        title: "Carnes a la brasa",
        text: "Ibérico a la brasa, churrasco y chuletón de vaca rubia gallega madurada.",
        icon: "brasa",
      },
      {
        title: "Del mar",
        text: "Pescaíto frito, tortilla de camarones, atún rojo y pata de pulpo.",
        icon: "mar",
      },
      {
        title: "Revueltos y hamburguesa",
        text: "Revueltos con huevos de campo y hamburguesa americana completa.",
        icon: "revuelto",
      },
      {
        title: "Postres de la casa",
        text: "Arroz con leche, tocinillo de cielo y tarta de queso al horno.",
        icon: "postre",
      },
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

  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    text: "Llámanos para reservar mesa, preguntar por la carta o encargar para un grupo. Te atendemos personalmente.",
    cta: "Llamar al 673 895 151",
    note: "Bistro Bar Calle 13 · Grupo Hostelero Samuel Manzanares",
  },

  footer: {
    tagline: "Del mar y de la dehesa a tu mesa.",
    navTitle: "Secciones",
    contactTitle: "Contacto",
    rights: "Todos los derechos reservados.",
    madeBy: "Hecho con ♥ por",
  },
};

export type Strings = typeof es;
