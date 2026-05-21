const base = import.meta.env.BASE_URL

export const ppfz = {
  id: 1,
  title: 'Парадный Петербург с выходом в Финский залив',
  category: 'Дневные экскурсии',
  updated: '18.05.2026',
  owner: 'Татьяна Николаева',
  ship: 'Астра',

  shipImage: `${base}ships/astra.jpg`,
  shipGallery: [
    `${base}ships/astra.jpg`,
    `${base}ships/astra1.jpg`,
    `${base}ships/astra2.jpg`,
    `${base}ships/astra3.jpg`,
  ],

  mapImage: `${base}maps/ppfz.jpg`,
  mapGallery: [`${base}maps/ppfz.jpg`],

  pier: 'Спуск со львами',
  time: '12:00, 14:00',
  duration: '1 час 45 минут',
  distance: '20,6 км',
  season: 'апрель — ноябрь',
  format: 'Обзорный круиз',
  languages: 'Русский, английский, немецкий, китайский',
  description:
    'Самый популярный маршрут по историческому центру, Финскому заливу и современной части Петербурга.',
  restrictions: 'Маршрут может изменяться при повышении уровня воды.',
  alternative: 'Парадная Нева',
  restaurant: 'Ресторан, бар, VIP-салон',
  tickets: 'Полный, льготный, детский, VIP',
}