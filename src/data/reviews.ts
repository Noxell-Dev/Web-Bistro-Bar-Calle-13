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
    name: 'Estefania Estefy',
    text: 'Hay sitios donde simplemente comes bien… y luego están lugares como Bistron Calle 13, donde además te hacen sentir especial. Desde el primer momento el trato fue cercano, amable y lleno de atención a cada detalle. El ambiente es precioso y acogedor, de esos sitios donde apetece quedarse horas disfrutando. La comida estaba espectacular, hecha con cariño y con una calidad que se nota en cada plato. Todo cuidado al detalle, desde la presentación hasta el sabor. Da gusto encontrar un lugar donde trabajan con tanta pasión y hacen que la experiencia sea tan bonita. Sin duda, uno de esos sitios que cuando te vas ya estás pensando en volver. Totalmente recomendado ❤️',
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
