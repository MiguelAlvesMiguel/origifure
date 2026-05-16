import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/Icons.jsx'
import { testimonials, media } from '../config/site.js'

function Stars() {
  return (
    <div className="testimonial__stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3L22 9.3l-5 4.8 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.8 7.1-1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Testemunhos" title="O que dizem os nossos clientes" />
        {/* Conteúdo editável — substituir por testemunhos reais quando disponíveis. */}
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="testimonial reveal"
              data-anim={i % 2 ? 'right' : 'left'}
              style={{ '--d': `${i * 100}ms` }}
            >
              <span className="testimonial__mark"><Icon name="advice" size={22} /></span>
              <Stars />
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <img className="testimonial__avatar" src={t.avatar || media[t.avatarKey]} alt={t.name} loading="lazy" />
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
