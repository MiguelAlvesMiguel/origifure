import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/Icons.jsx'
import { services, media } from '../config/site.js'

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo para o conforto e eficiência da sua casa ou empresa"
          intro="Da climatização às energias renováveis, a Origifure acompanha cada projeto desde o aconselhamento inicial até à instalação."
        />

        <div className="services-grid">
          {services.map((s, i) => (
            <a
              key={s.id}
              href="#orcamento"
              className="svc reveal"
              data-anim="zoom"
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="svc__img">
                <img src={media[s.image]} alt={s.title} loading="lazy" />
                <span className="svc__num">0{i + 1}</span>
              </div>
              <div className="svc__body">
                <span className="svc__icon"><Icon name={s.icon} size={24} /></span>
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__text">{s.description}</p>
                <span className="svc__cta">
                  {s.cta} <Icon name="arrow" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
