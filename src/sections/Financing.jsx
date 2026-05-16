import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { company, media } from '../config/site.js'

export default function Financing() {
  return (
    <section className="section" id="financiamento">
      <div className="container financing">
        <div className="financing__text reveal">
          <span className="sec-head__eyebrow">Financiamento</span>
          <h2 className="financing__title">Soluções com possibilidade de financiamento</h2>
          <p>
            A Origifure atua como intermediário de crédito a título acessório, podendo
            apresentar opções de financiamento para determinados equipamentos e soluções,
            de acordo com as condições aplicáveis.
          </p>
          <p className="financing__note">
            <Icon name="shield" size={18} />
            Intermediário de crédito registado no Banco de Portugal com o nº {company.creditNumber}.
          </p>
          <Button href="#orcamento" variant="primary" size="md" icon="arrow">
            Pedir informação sobre financiamento
          </Button>
        </div>
        <div className="financing__media reveal">
          <img src={media.livingRoom} alt="Conforto em casa com soluções financiadas" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
