import Button from '../components/Button.jsx'
import { company } from '../config/site.js'

const DOTS = Array.from({ length: 18 }, (_, i) => ({
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7)  % 100,
  s: 0.5 + (i % 5) * 0.35,
  d: i * 0.4,
}))

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="sobre">
      {/* floating particles */}
      <div className="cta-banner__particles" aria-hidden="true">
        {DOTS.map((d, i) => (
          <span
            key={i}
            className="cta-banner__dot"
            style={{
              left:  `${d.x}%`,
              top:   `${d.y}%`,
              '--s':  d.s,
              '--dd': `${d.d}s`,
            }}
          />
        ))}
      </div>

      <div className="container cta-banner__inner">
        <div className="cta-banner__text reveal" data-anim="left">
          <span className="cta-banner__eyebrow">Pronto para começar?</span>
          <h2>Pronto para melhorar o conforto e eficiência do seu espaço?</h2>
          <p>Peça um orçamento gratuito e receba aconselhamento técnico especializado — sem compromisso.</p>
        </div>
        <div className="cta-banner__btns reveal" data-anim="right" style={{ '--d': '120ms' }}>
          <Button href="#orcamento" variant="white" size="lg" icon="arrow">Pedir orçamento</Button>
          <Button href={`tel:${company.phoneIntl}`} variant="outline-light" size="lg" icon="phone">
            Ligar {company.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
