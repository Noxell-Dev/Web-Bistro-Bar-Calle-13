/**
 * Reseñas reales de clientes, tomadas del perfil de Google Maps del
 * negocio (4,6/5 con 402 reseñas a 19/09/2026). Si cambian, actualiza
 * también `googleRating` en src/i18n/es.ts.
 */
export interface Review {
  name: string;
  text: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    name: 'Belen Benítez Lara',
    text: 'Hemos ido por primera vez hoy y sin lugar a dudas repetiremos porque nos han faltado cosas de la carta por probar. El calamar estaba buenísimo, en su punto y el cachopo igual buenísimo. Hemos probado rosada frita y croquetas y la ensaladilla rusa y todo riquísimo sin lugar a dudas, y arroz con leche tremendo. Excelente atención y la cocina rápida.',
    stars: 5,
  },
  {
    name: 'A C',
    text: 'Hemos ido hoy por primera vez y hemos comido súper bien, estaba todo muy bueno. Samuel ha sido muy agradable con nosotros, un buen trato y atención que se agradece mucho. El chico de la barra Javier también nos ha dado un buen servicio. El calamar merece ir a probarlo, la tostada muy buena y todo lo que hemos pedido, la tarta de queso casera de las mejores que he probado. Volveremos a ir que tenemos que probar muchas más cositas de la carta. Gracias chicos.',
    stars: 5,
  },
  {
    name: 'Seila Pavon',
    text: 'Hemos venido por primera vez y ha sido una experiencia estupenda. La comida ha sido deliciosa, no sabría decir qué me ha gustado más… La pata de pulpo y el atún de almadraba a la plancha exquisitos, y en su punto. El trato ha sido estupendo y muy amable con mi hijo pequeño, que a día de hoy es difícil encontrar. Volveremos 💖',
    stars: 5,
  },
  {
    name: 'Estefania Tirado Martín',
    text: 'Hemos comido muy bien. La comida estaba rica, las raciones eran adecuadas y la relación calidad-precio es muy buena. El servicio fue agradable y el ambiente también nos gustó. Sin duda, volveremos.',
    stars: 5,
  },
];
