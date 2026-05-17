import SectionHeading from '../components/SectionHeading.jsx'
import { testimonials } from '../config/site.js'

// Split reviews into two rows for opposite-direction scrolling
const half = Math.ceil(testimonials.length / 2)
const ROW1 = testimonials.slice(0, half)
const ROW2 = testimonials.slice(half)

function Stars() {
  return (
    <div className="tcard__stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3L22 9.3l-5 4.8 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.8 7.1-1z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="tcard">
      <div className="tcard__head">
        <Stars />
        <a
          className="tcard__gmaps"
          href={t.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ver no Google Maps"
        >
          <GoogleIcon /> Ver no Google
        </a>
      </div>
      <p className="tcard__text">{t.text}</p>
      <div className="tcard__author">
        <img className="tcard__avatar" src={t.avatar} alt={t.name} loading="lazy" />
        <span>
          <strong>{t.name}</strong>
          <small>{t.role}</small>
        </span>
      </div>
    </div>
  )
}

function MarqueeRow({ reviews, reverse = false }) {
  // Duplicate for seamless loop
  const track = [...reviews, ...reviews, ...reviews]
  return (
    <div className={`tmarquee__row${reverse ? ' tmarquee__row--rev' : ''}`}>
      <div className="tmarquee__track">
        {track.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section--tint" id="testemunhos">
      <div className="container">
        <SectionHeading
          eyebrow="Testemunhos"
          title="O que dizem os nossos clientes"
          intro="Avaliações reais verificadas no Google Maps."
        />
      </div>

      <div className="tmarquee">
        <MarqueeRow reviews={ROW1} />
        <MarqueeRow reviews={ROW2} reverse />
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: '36px' }}>
        <a
          className="tmarquee__all"
          href="https://www.google.com/maps/place/Origifure+Climatiza%C3%A7%C3%A3o/@41.1507827,-8.6023298,17z/data=!4m8!3m7!1s0x0:0x89d387d7cbf52673!8m2!3d41.1507827!4d-8.6023298!9m1!1b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleIcon /> Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  )
}
