/**
 * Menús de Navidad de Bistro Bar Calle 13.
 * Transcripción de los carteles del negocio (noviembre 2026).
 * Precios en euros por persona, IVA incluido.
 * Todos los menús son para grupos: mínimo 4 personas.
 */

export interface ChristmasMenuGroup {
  /** Título del bloque dentro del menú ("5 platos a compartir", ...) */
  title: string;
  items: string[];
}

export interface ChristmasMenu {
  id: string;
  price: string;
  /** Nota bajo el precio (mínimo de comensales) */
  minPeople: string;
  groups: ChristmasMenuGroup[];
  /** Postres, sin el rótulo ("Surtido de tartas") */
  desserts: string;
  /** Bebida incluida, sin el rótulo */
  drinks: string;
  /** Matiz de la bebida ("hasta llegar al postre" o vacío) */
  drinksNote?: string;
  /** Frase de cierre del cartel, en manuscrita */
  slogan: string;
}

export const christmasMenus: ChristmasMenu[] = [
  {
    id: "navidad-35",
    price: "35 €",
    minPeople: "Mínimo 4 personas",
    groups: [
      {
        title: "5 platos a compartir",
        items: [
          "Chicharrones barreños",
          "Ensaladilla rusa",
          "Croquetas de cocido",
          "Rosada frita",
          "Chanquetes fritos con huevos de campo y pimientos asados en horno de leña",
        ],
      },
    ],
    desserts: "Surtido de tartas",
    drinks: "Refrescos, cerveza, agua, vinos de la casa",
    drinksNote: "hasta llegar al postre",
    slogan: "La mejor compañía hace la mejor Navidad",
  },
  {
    id: "navidad-45",
    price: "45 €",
    minPeople: "Mínimo 4 personas",
    groups: [
      {
        title: "5 platos a compartir",
        items: [
          "Jamón ibérico (beher)",
          "Cachopo",
          "Twister de langostinos",
          "Calamares fritos",
          "Secreto ibérico",
        ],
      },
    ],
    desserts: "Surtido de tartas",
    drinks: "Refrescos, cerveza, agua, vinos de la casa",
    drinksNote: "hasta llegar al postre",
    slogan: "Tradición, sabor y buena mesa",
  },
  {
    id: "navidad-55",
    price: "55 €",
    minPeople: "Mínimo 4 personas",
    groups: [
      {
        title: "A compartir",
        items: [
          "Jamón ibérico (beher)",
          "Queso curado en manteca",
          "Gambas de Huelva",
          "Chicharrones barreños",
        ],
      },
      {
        title: "Plato individual a elegir",
        items: [
          "Atún Rojo de almadraba (a la plancha)",
          "Entrecot de ternera",
        ],
      },
    ],
    desserts: "Surtido de postres",
    drinks:
      "Rioja Beronia, Ribera Carramimbre, vino blanco Tierra Blanca, Verdejo, refrescos, agua, cerveza",
    slogan: "Para estas Navidades… lo mejor, en Calle 13",
  },
];
