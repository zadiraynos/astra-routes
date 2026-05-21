const base = import.meta.env.BASE_URL

export const eveningIslands = {
  id: 5,
  title: 'Ужин вдоль Северных островов',
  category: 'Ужины-круизы',
  updated: '18.05.2026',
  owner: 'Татьяна Николаева',
  ship: 'Ряпушка',

  shipImage: `${base}ships/ryapushka.jpg`,
  shipGallery: [
    `${base}ships/ryapushka.jpg`,
    `${base}ships/ryapushka1.jpg`,
    `${base}ships/ryapushka2.jpg`,
  ],

  mapImage: `${base}maps/sodn.jpg`,
  mapGallery: [`${base}maps/sodn.jpg`],

  pier: 'Спуск со львами',
  time: '18:30',
  duration: '2 часа',
  distance: '19 км',
  season: 'апрель—ноябрь',
  format: 'Вечерний круиз',
  languages: 'Саксофон',
  description: 'Вечерний круиз с рестораном и видами на острова.',
  restrictions: 'Не работает при высоком уровне воды.',
  alternative: 'Нет',
  restaurant: 'Ресторан, VIP',
  tickets: 'Стандарт и VIP',
}