import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { processSteps } from '../config/site.js'

export default function Process() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="O Nosso Processo" title="Como funciona" />

        <div className="grid grid--4 process">
          {processSteps.map((s, i) => (
            <div key={s.n} className="process__step reveal" style={{ '--d': `${i * 90}ms` }}>
              <span className="process__num">{String(s.n).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="process__cta">
          <Button href="#orcamento" variant="primary" size="lg" icon="arrow">
            Começar o meu pedido
          </Button>
        </div>
      </div>
    </section>
  )
}
