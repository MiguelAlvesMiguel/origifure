import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { projects, media } from '../config/site.js'

export default function Projects() {
  return (
    <section className="section section--dark" id="projetos">
      <div className="container">
        <SectionHeading
          eyebrow="Projetos"
          title="Soluções para diferentes tipos de projeto"
          intro="Adaptamos cada sistema ao tipo de espaço, utilização e objetivos do cliente."
          light
        />
        <div className="projects">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`proj reveal ${i === 0 ? 'proj--lg' : ''}`}
              data-anim="zoom"
              style={{ '--d': `${i * 70}ms` }}
            >
              <img src={media[p.image]} alt={p.title} loading="lazy" />
              <div className="proj__overlay" />
              <div className="proj__content">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="proj__link">
                  Pedir orçamento <Icon name="arrow" size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="projects__cta reveal">
          <Button href="#orcamento" variant="white" size="lg" icon="arrow">
            Tenho um projeto destes
          </Button>
        </div>
      </div>
    </section>
  )
}
