import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { company, whatsappLink } from '../config/site.js'

const VIDEOS = ['/hero-video-1.mp4', '/hero-video-2.mp4']

const HERO_IMAGES = [
  '/hero-img-1.png',
  '/hero-img-2.png',
  '/hero-img-3.png',
  '/hero-img-4.png',
]

const trust = [
  'Desde 2007',
  'Instalações em Portugal Continental',
  'Orçamentos grátis',
  'Apoio técnico especializado'
]

const tags = [
  { icon: 'snow', label: 'Climatização' },
  { icon: 'sun',  label: 'Fotovoltaico' },
  { icon: 'leaf', label: 'Aerotermia' },
  { icon: 'wind', label: 'Ventilação' }
]

export default function Hero() {
  // ── Sequential video playback ──────────────────────────────
  const videoRef  = useRef(null)
  const vidIdxRef = useRef(0)

  const handleVideoEnded = () => {
    vidIdxRef.current = (vidIdxRef.current + 1) % VIDEOS.length
    const v = videoRef.current
    if (!v) return
    v.src = VIDEOS[vidIdxRef.current]
    v.load()
    v.play().catch(() => {})
  }

  // ── Cycling hero card images ───────────────────────────────
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setImgIdx(i => (i + 1) % HERO_IMAGES.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
        >
          <source src={VIDEOS[0]} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__glow" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Logo — wind pulses live in hero__logo-outer (no stacking context)
               so they can expand beyond the circle without being clipped */}
          <div className="hero__logo-outer">
            <span className="hero__wind" style={{ '--w': '0s' }} aria-hidden="true" />
            <span className="hero__wind" style={{ '--w': '1.4s' }} aria-hidden="true" />
            <span className="hero__wind" style={{ '--w': '2.8s' }} aria-hidden="true" />
            <img
              src="/logo.png"
              alt="Origifure Climatização"
              className="hero__logo"
            />
          </div>

          <span className="hero__badge reveal" data-anim="up" style={{ '--d': '60ms' }}>
            <Icon name="shield" size={16} /> Climatização &amp; Energias Renováveis · Porto
          </span>
          <h1 className="hero__title reveal" data-anim="up" style={{ '--d': '140ms' }}>
            Soluções de climatização e energia <span>à medida do seu projeto</span>
          </h1>
          <p className="hero__sub reveal" data-anim="up" style={{ '--d': '220ms' }}>
            Instalação de ar condicionado, aquecimento, ventilação, fotovoltaico, solar
            térmico e aerotermia com aconselhamento técnico especializado.
          </p>

          <ul className="hero__trust reveal" data-anim="up" style={{ '--d': '300ms' }}>
            {trust.map((t) => (
              <li key={t}><Icon name="check" size={16} /> {t}</li>
            ))}
          </ul>

          <div className="hero__ctas reveal" data-anim="up" style={{ '--d': '380ms' }}>
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

          <a className="hero__call reveal" data-anim="up" style={{ '--d': '460ms' }} href={`tel:${company.phoneIntl}`}>
            <Icon name="phone" size={18} /> Ligue-nos: <strong>{company.phone}</strong>
          </a>
        </div>

        <div className="hero__visual reveal" data-anim="right">
          <div className="hero__card">
            {/* Crossfading image cycle */}
            <div className="hero__img-cycle">
              {HERO_IMAGES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Técnico especializado Origifure"
                  className={`hero__img-slide${i === imgIdx ? ' hero__img-slide--active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
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
