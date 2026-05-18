import { useState } from 'react'
import { routes } from './data/routes'
import './index.css'

const categories = [
  'Дневные экскурсии',
  'Ужины-круизы',
  'Разводные мосты',
  'Реки и каналы',
  'Метеоры',
]

export default function App() {
  const [selectedRoute, setSelectedRoute] = useState(routes[0])
  const [search, setSearch] = useState('')
  const [openCategories, setOpenCategories] = useState(categories)

  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])
  const [galleryIndex, setGalleryIndex] = useState(0)

  const route = selectedRoute

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const filteredRoutes = routes.filter((item) => {
    const query = search.toLowerCase().trim()

    const searchText = [
      item.title,
      item.category,
      item.ship,
      item.pier,
      item.format,
      item.languages,
      item.description,
      item.time,
      item.duration,
      item.distance,
      item.season,
      item.restrictions,
      item.alternative,
      item.restaurant,
      item.tickets,
    ]
      .join(' ')
      .toLowerCase()

    return searchText.includes(query)
  })

  const openGallery = (images, index = 0) => {
    setGalleryImages(images)
    setGalleryIndex(index)
    setGalleryOpen(true)
  }

  const closeGallery = () => {
    setGalleryOpen(false)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  return (
    <main className="page">
      <aside className="sidebar">
        <div className="logo">Astra Marine</div>

        <input
          className="search"
          placeholder="Найти маршрут, теплоход, причал..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <nav className="route-groups">
          {categories.map((category) => {
            const categoryRoutes = filteredRoutes.filter(
              (item) => item.category === category
            )

            if (categoryRoutes.length === 0) return null

            const isSearchActive = search.trim().length > 0
            const isOpen = isSearchActive || openCategories.includes(category)

            return (
              <div className="route-group" key={category}>
                <button
                  className="group-title"
                  onClick={() => toggleCategory(category)}
                >
                  <span>{category}</span>
                  <span className={`group-arrow ${isOpen ? 'open' : ''}`}>
                    ›
                  </span>
                </button>

                {isOpen && (
                  <div className="group-list">
                    {categoryRoutes.map((item) => (
                      <button
                        key={item.id}
                        className={`menu-item ${
                          route.id === item.id ? 'active' : ''
                        }`}
                        onClick={() => setSelectedRoute(item)}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {filteredRoutes.length === 0 && (
            <div className="empty-result">Маршруты не найдены</div>
          )}
        </nav>
      </aside>

      <section className="content">
        <header className="hero">
          <div>
            <p className="eyebrow">Паспорт маршрута</p>
            <h1>{route.title}</h1>
            <p className="hero-text">{route.description}</p>
          </div>

          <div className="hero-side">

  <div className="hero-card">
    <span>Теплоход</span>
    <strong>{route.ship}</strong>
  </div>

  <div className="version-card">

    <span>
      Внутренний портал
    </span>

    <strong>
      Astra Marine v0.1
    </strong>

  </div>

</div>
        </header>

        <section className="stats-grid">
          <Info label="Отправление" value={route.time} />
          <Info label="Длительность" value={route.duration} />
          <Info label="Протяжённость" value={route.distance} />
          <Info label="Период" value={route.season} />
        </section>

        <section className="main-grid">
          <div className="card wide">
            <h2>Базовая информация</h2>

            <div className="info-list">
              <Row label="Категория" value={route.category} />
              <Row label="Формат" value={route.format} />
              <Row label="Причал" value={route.pier} />
              <Row label="Аудиоэкскурсия" value={route.languages} />
              <Row label="Маршрут круговой" value="Да" />
            </div>
          </div>

          <button
            className="card image-card"
            style={{ backgroundImage: `url(${route.shipImage})` }}
            onClick={() => openGallery(route.shipGallery)}
          >
            <div className="image-overlay">
              <span>Теплоход</span>
              <strong>{route.ship}</strong>
            </div>
          </button>

          <button
            className="card image-card"
            style={{ backgroundImage: `url(${route.mapImage})` }}
            onClick={() => openGallery(route.mapGallery)}
          >
            <div className="image-overlay">
              <span>Карта маршрута</span>
              <strong>{route.title}</strong>
            </div>
          </button>

          <div className="card">
            <h2>Ограничения</h2>
            <p>{route.restrictions}</p>
            <div className="note">Альтернатива: {route.alternative}</div>
          </div>

          <div className="card">
            <h2>Ресторан</h2>
            <p>{route.restaurant}</p>
          </div>

          <div className="card">

<h2>
Служебная информация
</h2>

<div className="info-list">

<Row
label='Последнее обновление'
value={route.updated}
/>

<Row
label='Ответственный'
value={route.owner}
/>

</div>

</div>
        </section>
      </section>

      {galleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <button className="gallery-close" onClick={closeGallery}>
            ×
          </button>

          {galleryImages.length > 1 && (
            <>
              <button className="gallery-arrow left" onClick={prevImage}>
                ‹
              </button>

              <button className="gallery-arrow right" onClick={nextImage}>
                ›
              </button>
            </>
          )}

          <img
            src={galleryImages[galleryIndex]}
            className="gallery-image"
            alt="Изображение маршрута"
            onClick={(e) => e.stopPropagation()}
          />

          {galleryImages.length > 1 && (
            <div className="gallery-counter">
              {galleryIndex + 1} / {galleryImages.length}
            </div>
          )}
        </div>
      )}<footer className="feedback-footer">
  <a
    href="https://forms.yandex.ru/u/6a0b7acbd04688132b038a5d"
    target="_blank"
    rel="noreferrer"
    className="feedback-link"
  >
    💬 Обратная связь / предложить улучшение
  </a>
</footer>
    </main>
  )
}

function Info({ label, value }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="row">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  )
}