import Button from '../components/Button.jsx'
import { company } from '../config/site.js'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner reveal">
        <div>
          <h2>Pronto para melhorar o conforto e eficiência do seu espaço?</h2>
          <p>Peça um orçamento gratuito e receba aconselhamento técnico especializado.</p>
        </div>
        <div className="cta-banner__btns">
          <Button href="#orcamento" variant="white" size="lg" icon="arrow">Pedir orçamento</Button>
          <Button href={`tel:${company.phoneIntl}`} variant="outline-light" size="lg" icon="phone">
            Ligar {company.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
