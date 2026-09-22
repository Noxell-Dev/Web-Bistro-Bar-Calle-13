/**
 * Carta de Bistro Bar Calle 13.
 * Transcripción de la carta impresa del negocio (septiembre 2026).
 * Precios en euros, IVA incluido.
 */

export interface MenuItem {
  name: string;
  description?: string;
  /** Precio único (plato sin tamaños) */
  price?: string;
  /** Precio de media ración */
  halfPrice?: string;
  /** Precio de ración completa */
  fullPrice?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  footnote?: string;
}

export const menu: MenuCategory[] = [
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Tomate aliñado", price: "8,00 €" },
      {
        name: "Ensalada Mixta",
        description: "Lechuga, tomate, huevo duro, cebolla y atún",
        price: "9,00 €",
      },
      {
        name: "Tomate aliñado con melva canutera y cebolla",
        price: "12,00 €",
      },
      {
        name: "Ensalada de Rulo de Cabra",
        description: "Lechuga, cebolla caramelizada, nueces y rulo de cabra",
        price: "13,00 €",
      },
    ],
  },
  {
    id: "tapas",
    title: "Tapas",
    items: [
      { name: "Montadito de pollo/lomo", price: "2,50 €" },
      { name: "Montadito Chicharrones", price: "3,00 €" },
      { name: "Pinchito de pollo", price: "3,00 €" },
      { name: "Montadito Serranito (pollo/lomo)", price: "3,50 €" },
      { name: "Twister langostino", price: "4,00 €" },
      {
        name: "Queso Camembert frito con mermelada de frambuesa",
        price: "4,50 €",
      },
      { name: "Jamón de cebo", price: "21,00 €" },
      { name: "Jamón de bellota", price: "24,00 €" },
      { name: "Salsa extra", price: "0,50 €" },
    ],
  },
  {
    id: "tostas",
    title: "Tostas",
    items: [
      { name: "Sardina con tomate en rodaja", price: "5,00 €" },
      { name: "Aguacate, huevo y bacon", price: "6,00 €" },
      { name: "Rulo de cabra con nueces y miel", price: "5,50 €" },
      { name: "Cesta de pan", price: "1,50 €" },
      { name: "Aceitunas", price: "1,00 €" },
    ],
  },
  {
    id: "revueltos",
    title: "Revueltos",
    items: [
      {
        name: "Campero",
        description: "Huevos de campo, chorizo, morcilla y patatas",
        price: "16,50 €",
      },
      {
        name: "Ibérico",
        description: "Huevos de campo, jamón ibérico y patatas",
        price: "16,50 €",
      },
      {
        name: "Del Mar",
        description: "Huevos de campo, ortigas y gambones",
        price: "22,50 €",
      },
    ],
  },
  {
    id: "para-compartir",
    title: "Para compartir",
    subtitle: "En el centro de la mesa, como tiene que ser",
    items: [
      { name: "Patatas bravas", price: "5,50 €" },
      { name: "Patatas bacon y queso", price: "6,00 €" },
      { name: "Provolone con tomate", price: "8,00 €" },
      { name: "Provolone de bacon", price: "8,50 €" },
      { name: "Wok de verduras (pollo o gamba)", price: "12,00 €" },
      { name: "Chicharrones caseros", price: "13,00 €" },
      { name: "Gambas pil-pil", price: "14,00 €" },
      {
        name: "Croquetas caseras de cocido",
        halfPrice: "8,50 €",
        fullPrice: "13,00 €",
      },
      {
        name: "Croquetas caseras de choco",
        halfPrice: "9,50 €",
        fullPrice: "15,00 €",
      },
      {
        name: "Croquetas caseras de rabo de toro",
        halfPrice: "9,50 €",
        fullPrice: "15,00 €",
      },
    ],
  },
  {
    id: "hamburguesa",
    title: "Hamburguesa",
    items: [
      {
        name: "Hamburguesa Americana",
        description:
          "Ternera o pollo, lechuga, tomate, cebolla crujiente, queso, bacon, aros de cebolla y salsa barbacoa",
        price: "13,50 €",
      },
    ],
  },
  {
    id: "carnes",
    title: "Carnes",
    items: [
      { name: "Pollo Kentucky", price: "13,00 €" },
      { name: "Churrasco de pollo", price: "13,00 €" },
      { name: "Solomillo de cerdo ibérico", price: "18,50 €" },
      { name: "Lagarto ibérico", price: "18,50 €" },
      { name: "Secreto ibérico", price: "18,50 €" },
      { name: "Presa ibérica 100%", price: "19,50 €" },
      { name: "Lomo bajo de vaca (200 grs.)", price: "29,00 €" },
      { name: "Chuletón de Retinto (1 kg.)", price: "80,00 €/kg" },
      {
        name: "Chuletón de Vaca Rubia Gallega madurada (1 kg.)",
        price: "90,00 €/kg",
      },
      { name: "Rabo de Toro en salsa", price: "25,00 €" },
      { name: "Salsas", price: "1,50 €" },
    ],
  },
  {
    id: "pescado",
    title: "Pescado",
    subtitle: "Del mar, frito y a la plancha",
    footnote: "s/p: según peso.",
    items: [
      { name: "Tortilla de camarones", price: "3,50 €" },
      {
        name: "Zamburiñas (ración 5 unidades)",
        price: "15,00 €",
      },
      {
        name: "Cazón en adobo",
        halfPrice: "9,50 €",
        fullPrice: "15,00 €",
      },
      {
        name: "Calamares fritos",
        halfPrice: "9,50 €",
        fullPrice: "16,00 €",
      },
      {
        name: "Puntillitas",
        halfPrice: "12,00 €",
        fullPrice: "16,50 €",
      },
      {
        name: "Rosada frita",
        halfPrice: "9,50 €",
        fullPrice: "17,00 €",
      },
      {
        name: "Chanquetes fritos con huevos de campo y pimientos asados",
        halfPrice: "12,00 €",
        fullPrice: "18,00 €",
      },
      { name: "Ortiguillas fritas", price: "19,00 €" },
      { name: "Coquinas", price: "19,00 €" },
      {
        name: "Tostas de atún rojo (4 unidades)",
        price: "20,00 €",
      },
      { name: "Tartar de atún rojo", price: "23,00 €" },
      { name: "Atún Rojo a la plancha", price: "25,00 €" },
      { name: "Pata de pulpo", price: "28,00 €" },
      { name: "Choco a la plancha", price: "s/p · 40 €/kg" },
      { name: "Calamar a la plancha", price: "s/p · 50 €/kg" },
      { name: "Calamar frito Tik Tok", price: "s/p · 50 €/kg" },
    ],
  },
  {
    id: "postres",
    title: "Postres de la casa",
    items: [
      { name: "Arroz con leche", price: "5,00 €" },
      { name: "Tocino de cielo", price: "5,00 €" },
      { name: "Flan de huevo", price: "5,00 €" },
      { name: "Tarta de queso al horno", price: "6,00 €" },
      { name: "Tarta de Huesitos", price: "5,00 €" },
    ],
  },
];

/** Número total de platos en carta (para la sección de cifras). */
export const totalDishes: number = menu.reduce(
  (acc, cat) => acc + cat.items.length,
  0,
);
