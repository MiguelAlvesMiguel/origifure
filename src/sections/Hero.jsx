import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { company, media, whatsappLink } from '../config/site.js'

const trust = [
  'Desde 2007',
  'Instalações em Portugal Continental',
  'Orçamentos grátis',
  'Apoio técnico especializado'
]

const tags = [
  { icon: 'snow', label: 'Climatização' },
  { icon: 'sun', label: 'Fotovoltaico' },
  { icon: 'leaf', label: 'Aerotermia' },
  { icon: 'wind', label: 'Ventilação' }
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={media.heroPoster}
          preload="metadata"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__glow" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <img
            src="/logo.png"
            alt="Origifure Climatização"
            className="hero__logo reveal"
            data-anim="up"
            style={{ '--d': '0ms' }}
          />
          <span className="hero__badge reveal" data-anim="up">
            <Icon name="shield" size={16} /> Climatização &amp; Energias Renováveis · Porto
          </span>
          <h1 className="hero__title reveal" data-anim="up" style={{ '--d': '80ms' }}>
            Soluções de climatização e energia <span>à medida do seu projeto</span>
          </h1>
          <p className="hero__sub reveal" data-anim="up" style={{ '--d': '160ms' }}>
            Instalação de ar condicionado, aquecimento, ventilação, fotovoltaico, solar
            térmico e aerotermia com aconselhamento técnico especializado.
          </p>

          <ul className="hero__trust reveal" data-anim="up" style={{ '--d': '240ms' }}>
            {trust.map((t) => (
              <li key={t}><Icon name="check" size={16} /> {t}</li>
            ))}
          </ul>

          <div className="hero__ctas reveal" data-anim="up" style={{ '--d': '320ms' }}>
            <Button href="#orcamento" variant="primary" size="lg" icon="arrow">
              Pedir orçamento grátis
            </Button>
            <Button
              href={whatsappLink}
              variant="outline-light"
              size="lg"
              icon="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar por WhatsApp
            </Button>
          </div>

          <a className="hero__call reveal" data-anim="up" style={{ '--d': '400ms' }} href={`tel:${company.phoneIntl}`}>
            <Icon name="phone" size={18} /> Ligue-nos: <strong>{company.phone}</strong>
          </a>
        </div>

        <div className="hero__visual reveal" data-anim="right">
          <div className="hero__card">
            <img src={media.heroCard} alt="Técnico especializado em climatização" loading="eager" />
            <div className="hero__stat">
              <strong>+17</strong>
              <span>anos de experiência</span>
            </div>
          </div>
          <div className="hero__chips">
            {tags.map((t, i) => (
              <span key={t.label} className="hero__chip" style={{ '--i': i }}>
                <Icon name={t.icon} size={16} /> {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span /> Descer
      </div>
    </section>
  )
}
