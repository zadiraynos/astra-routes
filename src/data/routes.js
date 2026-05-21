const base = import.meta.env.BASE_URL

export const routes = [
  {
    id: 1,
    title: 'Парадный Петербург с выходом в Финский залив',
    category: 'Дневные экскурсии',
    updated:'18.05.2026',
    owner:'Татьяна Николаева',
    ship: 'Астра',

    shipImage: `${base}ships/astra.jpg`,
    shipGallery: [
      `${base}ships/astra.jpg`,
      `${base}ships/astra1.jpg`,
      `${base}ships/astra2.jpg`,
      `${base}ships/astra3.jpg`,
    ],

    mapImage: `${base}maps/ppfz.jpg`,
    mapGallery: [
      `${base}maps/ppfz.jpg`
    ],

    pier: 'Спуск со львами',
    time: '12:00, 14:00',
    duration: '1 час 45 минут',
    distance: '20,6 км',
    season: 'апрель — ноябрь',
    format: 'Обзорный круиз',
    languages: 'Русский, английский, немецкий, китайский',

    description:
      'Самый популярный маршрут по историческому центру, Финскому заливу и современной части Петербурга.',

    restrictions:'Маршрут может изменяться при повышении уровня воды.',
    alternative:'Парадная Нева',
    restaurant:'Ресторан, бар, VIP-салон',
    tickets:'Полный, льготный, детский, VIP',
  },

  {
    id:2,
    title:'Метеоры в Петергоф',
    category:'Метеоры',
    updated:'18.05.2026',
    owner:'Татьяна Николаева',
    ship:'Метеор',

    shipImage:`${base}ships/meteor.jpg`,
    shipGallery:[
      `${base}ships/meteor.jpg`,
      `${base}ships/meteor1.jpg`,
      `${base}ships/meteor2.jpg`,
      `${base}ships/meteor3.jpg`,
    ],

    mapImage:`${base}maps/peterhof.jpg`,
    mapGallery:[
      `${base}maps/peterhof.jpg`
    ],

    pier:'Спуск со львами',
    time:'09:30–18:20',
    duration:'45 минут',
    distance:'25,8 км',
    season:'апрель—октябрь',
    format:'Скоростной трансфер',
    languages:'Русский',

    description:
      'Быстрый маршрут в Петергоф по Финскому заливу.',

    restrictions:'Не работает при шторме.',
    alternative:'Нет',
    restaurant:'Бар',

    tickets:
      'Полный, льготный, детский, Стандарт, Комфорт, Комфорт+, Бизнес',
  },

  {
    id:3,
    title:'Северные острова дельты Невы',
    category:'Дневные экскурсии',
    updated:'18.05.2026',
    owner:'Татьяна Николаева',
    ship:'Корюшка',

    shipImage:`${base}ships/koryushka.jpg`,
    shipGallery:[
      `${base}ships/koryushka.jpg`,
      `${base}ships/koryushka1.jpg`,
      `${base}ships/koryushka2.jpg`,
      `${base}ships/koryushka3.jpg`,
      `${base}ships/koryushka4.jpg`,
    ],

    mapImage:`${base}maps/sodn.jpg`,
    mapGallery:[
      `${base}maps/sodn.jpg`
    ],

    pier:'Спуск со львами',
    time:'11:30–18:30',
    duration:'1 час 45 минут',
    distance:'19,7 км',
    season:'апрель—ноябрь',
    format:'Обзорный круиз',
    languages:'5 языков',

    description:
      'Маршрут по островам Петербурга и Финскому заливу.',

    restrictions:'Не работает при высоком уровне воды.',
    alternative:'Парадная Нева',
    restaurant:'Ресторан, VIP',
    tickets:'Стандарт и VIP',
  },

  {
    id:4,
    title:'Реки и каналы Петербурга',
    category:'Реки и каналы',
    updated:'18.05.2026',
    owner:'Татьяна Николаева',
    ship:'Пальмира',

    shipImage:`${base}ships/palmira.jpg`,
    shipGallery:[
      `${base}ships/palmira.jpg`
    ],

    mapImage:`${base}maps/city.jpg`,
    mapGallery:[
      `${base}maps/city.jpg`
    ],

    pier:'Румянцевский спуск',
    time:'Каждый час',
    duration:'1 час 45 минут',
    distance:'14,2 км',
    season:'навигация',
    format:'Hop-On Hop-Off',
    languages:'5 языков',

    description:
      'Классический маршрут по центру Петербурга.',

    restrictions:'Может меняться из-за уровня воды.',
    alternative:'Фонтанка',
    restaurant:'Пледы и зонты',
    tickets:'1 день / 2 дня',
  },

  {
    id:5,
    title:'Ужин вдоль Северных островов',
    category:'Ужины-круизы',
    updated:'18.05.2026',
    owner:'Татьяна Николаева',
    ship:'Ряпушка',

    shipImage:`${base}ships/ryapushka.jpg`,
    shipGallery:[
      `${base}ships/ryapushka.jpg`,
      `${base}ships/ryapushka1.jpg`,
      `${base}ships/ryapushka2.jpg`,
    ],

    mapImage:`${base}maps/sodn.jpg`,
    mapGallery:[
      `${base}maps/sodn.jpg`
    ],

    pier:'Спуск со львами',
    time:'18:30',
    duration:'2 часа',
    distance:'19 км',
    season:'апрель—ноябрь',
    format:'Вечерний круиз',
    languages:'Саксофон',

    description:
      'Вечерний круиз с рестораном и видами на острова.',

    restrictions:'Не работает при высоком уровне воды.',
    alternative:'Нет',
    restaurant:'Ресторан, VIP',
    tickets:'Стандарт и VIP',
  }
]