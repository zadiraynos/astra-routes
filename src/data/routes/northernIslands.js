const base = import.meta.env.BASE_URL

export const northernIslands = {
  id: 3,
  title: 'Северные острова дельты Невы',
  category: 'Дневные экскурсии',
  updated: '18.05.2026',
  owner: 'Татьяна Николаева',
  ship: 'Корюшка',

  shipImage: `${base}ships/koryushka.jpg`,
  shipGallery: [
    `${base}ships/koryushka.jpg`,
    `${base}ships/koryushka1.jpg`,
    `${base}ships/koryushka2.jpg`,
    `${base}ships/koryushka3.jpg`,
    `${base}ships/koryushka4.jpg`,
  ],

  mapImage: `${base}maps/sodn.jpg`,
  mapGallery: [`${base}maps/sodn.jpg`],

  pier: 'Спуск со львами',
  time: '11:30–18:30',
  duration: '1 час 45 минут',
  distance: '19,7 км',
  season: 'апрель—ноябрь',
  format: 'Обзорный круиз',
  languages: '5 языков',
  description: 'Маршрут по островам Петербурга и Финскому заливу.',
  restrictions: 'Не работает при высоком уровне воды.',
  alternative: 'Парадная Нева',
  restaurant: 'Ресторан, VIP',
  tickets: 'Стандарт и VIP',
}