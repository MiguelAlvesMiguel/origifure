import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/Icons.jsx'
import { benefits, media } from '../config/site.js'

export default function WhyUs() {
  return (
    <section className="section section--tint" id="sobre">
      <div className="container why">
        <div className="why__media reveal">
          <img src={media.team} alt="Equipa técnica especializada da Origifure" loading="lazy" />
          <div className="why__badge">
            <Icon name="shield" size={22} />
            <div>
              <strong>Desde 2007</strong>
              <span>a climatizar Portugal Continental</span>
            </div>
          </div>
        </div>

        <div className="why__content">
          <SectionHeading
            eyebrow="Porquê a Origifure"
            title="Porquê escolher a Origifure?"
            align="left"
          />
          <div className="why__list">
            {benefits.map((b, i) => (
              <div key={b.title} className="why__item reveal" style={{ '--d': `${i * 80}ms` }}>
                <span className="why__icon"><Icon name={b.icon} size={24} /></span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
