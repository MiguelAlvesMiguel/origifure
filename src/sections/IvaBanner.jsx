import { Icon } from '../components/Icons.jsx'
import { company, whatsappLink } from '../config/site.js'

const perks = [
  { icon: 'check', text: 'Poupança imediata de 17% no IVA' },
  { icon: 'sun',   text: 'Conforto todo o ano' },
  { icon: 'leaf',  text: 'Eficiência energética & sustentabilidade' },
]

export default function IvaBanner() {
  return (
    <div className="iva-banner" role="alert" aria-label="Promoção IVA reduzido">
      <div className="container iva-banner__inner">
        {/* Left: badge + headline */}
        <div className="iva-banner__left">
          <span className="iva-banner__badge">
            <Icon name="flame" size={14} /> Oferta limitada
          </span>
          <p className="iva-banner__title">
            Aproveite o <strong>IVA reduzido de 6%</strong> antes que termine!
          </p>
          <p className="iva-banner__sub">
            Até <strong>30 de junho de 2025</strong> — bombas de calor e ar condicionado reversível.
            Após esta data, a taxa volta a <strong>23%</strong>.
          </p>
        </div>

        {/* Centre: perks */}
        <ul className="iva-banner__perks">
          {perks.map((p) => (
            <li key={p.text}>
              <Icon name={p.icon} size={15} /> {p.text}
            </li>
          ))}
        </ul>

        {/* Right: CTAs */}
        <div className="iva-banner__ctas">
          <a className="iva-banner__btn iva-banner__btn--primary" href="#orcamento">
            Orçamento grátis
          </a>
          <a
            className="iva-banner__btn iva-banner__btn--outline"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
          <a className="iva-banner__contact" href={`tel:${company.phoneIntl}`}>
            ☎ {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
