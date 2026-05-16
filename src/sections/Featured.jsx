import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { featured, media } from '../config/site.js'

export default function Featured() {
  return (
    <section className="section" id="energias-renovaveis">
      <div className="container featured">
        {featured.map((f, i) => (
          <div
            key={f.id}
            id={f.id}
            className={`featured__row ${i % 2 ? 'featured__row--rev' : ''}`}
          >
            <div className="featured__media reveal" data-anim={i % 2 ? 'right' : 'left'}>
              <div className="featured__frame">
                <img src={media[f.image]} alt={f.title} loading="lazy" data-parallax="0.08" />
              </div>
              <span className="featured__count">{String(i + 1).padStart(2, '0')}</span>
              <span className="featured__chip">{f.eyebrow}</span>
            </div>
            <div className="featured__text reveal" data-anim={i % 2 ? 'left' : 'right'}>
              <span className="featured__eyebrow">{f.eyebrow}</span>
              <h2 className="featured__title">{f.title}</h2>
              <p className="featured__desc">{f.text}</p>
              <ul className="featured__bullets">
                {f.bullets.map((b, bi) => (
                  <li key={b} style={{ '--d': `${bi * 70}ms` }}>
                    <Icon name="check" size={18} /> {b}
                  </li>
                ))}
              </ul>
              <Button href="#orcamento" variant="primary" size="md" icon="arrow">
                {f.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
