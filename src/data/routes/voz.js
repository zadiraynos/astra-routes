const base = import.meta.env.BASE_URL

export const voz = {
  id: 6,

  title: 'Встречаем огненный закат',

  badge:'🔥 Хит закатов',

  category: 'Ужины-круизы',

  updated: '21.05.2026',

  owner: 'Татьяна Николаева',

  ship: 'Астра',

  shipImage: `${base}ships/astra.jpg`,

  shipGallery: [
    `${base}ships/ryapushka.jpg`,
    `${base}ships/ryapushka1.jpg`,
    `${base}ships/ryapushka2.jpg`,
  ],

  mapImage: `${base}maps/voz.jpg`,

  mapGallery: [
    `${base}maps/voz.jpg`,
  ],

  pier: 'Спуск со львами',

  time: 'вечер',

  duration: '2 часа',

  distance: 'Финский залив',

  season: 'май — сентябрь',

  format: 'Закатный круиз',

  languages: 'Музыка на борту',

  description:
    'Вечерний круиз с панорамными видами на Финский залив и атмосферой заката. Подходит для свиданий, встреч с друзьями и спокойного отдыха.',

  restrictions:
    'Маршрут может корректироваться из-за погодных условий.',

  alternative:
    'Ужин-круиз при свечах',

  restaurant:
    'Ресторан, бар, обслуживание за столиками',

  tickets:
    'Стандарт, VIP',
}