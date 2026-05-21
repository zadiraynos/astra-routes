const base = import.meta.env.BASE_URL

export const cityRivers = {
  id: 4,
  title: 'Реки и каналы Петербурга',
  category: 'Реки и каналы',
  updated: '18.05.2026',
  owner: 'Татьяна Николаева',
  ship: 'Пальмира',

  shipImage: `${base}ships/palmira.jpg`,
  shipGallery: [`${base}ships/palmira.jpg`],

  mapImage: `${base}maps/city.jpg`,
  mapGallery: [`${base}maps/city.jpg`],

  pier: 'Румянцевский спуск',
  time: 'Каждый час',
  duration: '1 час 45 минут',
  distance: '14,2 км',
  season: 'навигация',
  format: 'Hop-On Hop-Off',
  languages: '5 языков',
  description: 'Классический маршрут по центру Петербурга.',
  restrictions: 'Может меняться из-за уровня воды.',
  alternative: 'Фонтанка',
  restaurant: 'Пледы и зонты',
  tickets: '1 день / 2 дня',
}