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
        name: "Ensalada mixta",
        description: "Lechuga, tomate, huevo duro, cebolla y atún",
        price: "9,00 €",
      },
      {
        name: "Tomate aliñado con melva canutera y cebolla",
        price: "12,00 €",
      },
      {
        name: "Ensalada de rulo de cabra",
        description: "Lechuga, cebolla caramelizada, nueces y rulo de cabra",
        price: "13,00 €",
      },
    ],
  },
  {
    id: "tapas",
    title: "Tapas",
    items: [
      { name: "Montadito de pollo lomo", price: "2,50 €" },
      { name: "Montadito de chicharrones", price: "3,00 €" },
      { name: "Pinchito de pollo", price: "3,00 €" },
      { name: "Montadito serrano (pollo lomo)", price: "3,50 €" },
      { name: "Tostón de langostino", price: "4,50 €" },
      {
        name: "Queso Camperito frito con mermelada de frutos rojos",
        price: "4,50 €",
      },
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
      { name: "Costa de pan", price: "1,50 €" },
      { name: "Adicionales", price: "0,50 €" },
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
    id: "hamburguesa",
    title: "Hamburguesa",
    items: [
      {
        name: "Hamburguesa Americana",
        description:
          "Ternera o pollo, lechuga, tomate, cebolla crujiente, queso, bacon, crema de cebolla y salsa barbacoa",
        price: "13,50 €",
      },
    ],
  },
  {
    id: "para-compartir",
    title: "Para compartir",
    subtitle: "En el centro de la mesa, como tiene que ser",
    items: [
      { name: "Patatas bravas o brava/alioli", price: "5,50 €" },
      { name: "Patatas bacon y queso", price: "6,00 €" },
      { name: "Provolone con tomate", price: "8,00 €" },
      { name: "Provolone con bacon", price: "9,50 €" },
      { name: "Wok de verduras (pollo o gamba)", price: "12,00 €" },
      {
        name: "Ración de chicharrones de Cádiz",
        description: "Con limón y sal",
        price: "12,00 €",
      },
      {
        name: "Croquetas de cocido",
        halfPrice: "8,50 €",
        fullPrice: "13,00 €",
      },
      { name: "Gambas pil-pil", price: "14,00 €" },
      { name: "Pinchitos de pollo", price: "12,00 €" },
      {
        name: "Revuelto de patatas y jamón serrano",
        price: "16,50 €",
      },
      {
        name: "Croquetas de choco",
        halfPrice: "9,50 €",
        fullPrice: "15,00 €",
      },
      {
        name: "Croquetas de rabo de toro",
        halfPrice: "9,50 €",
        fullPrice: "15,00 €",
      },
      {
        name: "Jamón cebo de campo 100% ibérico (BEHER)",
        price: "18,00 €",
      },
      {
        name: "Jamón de bellota 100% ibérico (BEHER)",
        price: "23,00 €",
      },
    ],
  },
  {
    id: "carnes",
    title: "Carnes",
    items: [
      { name: "Pollo Kentucky", price: "12,00 €" },
      { name: "Churrasco de pollo", price: "12,00 €" },
      { name: "Secreto ibérico a la brasa", price: "16,50 €" },
      { name: "Lagarto ibérico", price: "18,50 €" },
      { name: "Secreto ibérico", price: "18,50 €" },
      { name: "Presa ibérica 100%", price: "19,50 €" },
      { name: "Solomillo ibérico", price: "18,50 €" },
      { name: "Chuletón de Retinto (500 grs.)", price: "38,00 €" },
      {
        name: "Chuletón de Vaca Rubia Gallega madurada",
        price: "80 €/kg",
      },
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
      { name: "Pata de pulpo", price: "28,00 €" },
      { name: "Choco a la plancha", price: "s/p · 45 €/kg" },
      { name: "Calamar a la plancha", price: "s/p · 50 €/kg" },
      { name: "Calamar frito Tik Tok", price: "s/p · 50 €/kg" },
    ],
  },
  {
    id: "postres",
    title: "Postres de la casa",
    items: [
      { name: "Arroz con leche", price: "4,50 €" },
      { name: "Tocinillo de cielo", price: "4,50 €" },
      { name: "Flan de huevo", price: "5,00 €" },
      { name: "Tarta de queso al horno", price: "5,50 €" },
      { name: "Muerte por chocolate", price: "5,50 €" },
    ],
  },
];

/** Número total de platos en carta (para la sección de cifras). */
export const totalDishes: number = menu.reduce(
  (acc, cat) => acc + cat.items.length,
  0,
);
