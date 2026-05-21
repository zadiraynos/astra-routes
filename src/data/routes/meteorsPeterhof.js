const base = import.meta.env.BASE_URL

export const meteorsPeterhof = {
  id: 2,
  title: 'Метеоры в Петергоф',
  category: 'Метеоры',
  updated: '18.05.2026',
  owner: 'Татьяна Николаева',
  ship: 'Метеор',

  shipImage: `${base}ships/meteor.jpg`,
  shipGallery: [
    `${base}ships/meteor.jpg`,
    `${base}ships/meteor1.jpg`,
    `${base}ships/meteor2.jpg`,
    `${base}ships/meteor3.jpg`,
  ],

  mapImage: `${base}maps/peterhof.jpg`,
  mapGallery: [`${base}maps/peterhof.jpg`],

  pier: 'Спуск со львами',
  time: '09:30–18:20',
  duration: '45 минут',
  distance: '25,8 км',
  season: 'апрель—октябрь',
  format: 'Скоростной трансфер',
  languages: 'Русский',
  description: 'Быстрый маршрут в Петергоф по Финскому заливу.',
  restrictions: 'Не работает при шторме.',
  alternative: 'Нет',
  restaurant: 'Бар',
  tickets: 'Полный, льготный, детский, Стандарт, Комфорт, Комфорт+, Бизнес',
}