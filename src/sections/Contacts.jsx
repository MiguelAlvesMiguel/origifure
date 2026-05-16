import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { company, whatsappLink } from '../config/site.js'

export default function Contacts() {
  const { showroom, warehouse } = company.addresses
  return (
    <section className="section section--tint" id="contactos">
      <div className="container">
        <SectionHeading eyebrow="Contactos" title="Contacte a Origifure" />

        <div className="contacts">
          <div className="contacts__info reveal">
            <div className="contacts__cards">
              <div className="contacts__card">
                <span className="contacts__ic"><Icon name="pin" size={22} /></span>
                <h3>{showroom.label}</h3>
                <p>{showroom.street}<br />{showroom.zip}</p>
              </div>
              <div className="contacts__card">
                <span className="contacts__ic"><Icon name="pin" size={22} /></span>
                <h3>{warehouse.label}</h3>
                <p>{warehouse.street}<br />{warehouse.zip}</p>
              </div>
              <div className="contacts__card">
                <span className="contacts__ic"><Icon name="phone" size={22} /></span>
                <h3>Telefone &amp; Mobile</h3>
                <p>
                  <a href={`tel:${company.phoneIntl}`}>{company.phone}</a><br />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{company.whatsapp}</a> (WhatsApp)<br />
                  {company.mobile2}
                </p>
              </div>
              <div className="contacts__card">
                <span className="contacts__ic"><Icon name="mail" size={22} /></span>
                <h3>Email &amp; Horário</h3>
                <p>
                  {company.emails.map((e) => (
                    <span key={e}><a href={`mailto:${e}`}>{e}</a><br /></span>
                  ))}
                  {company.hours}
                </p>
              </div>
            </div>

            <div className="contacts__actions">
              <Button href={`tel:${company.phoneIntl}`} variant="primary" size="md" icon="phone">Ligar agora</Button>
              <Button href={whatsappLink} variant="outline" size="md" icon="whatsapp" target="_blank" rel="noopener noreferrer">Enviar WhatsApp</Button>
              <Button href="#orcamento" variant="ghost" size="md" icon="arrow">Pedir orçamento</Button>
            </div>
          </div>

          <div className="contacts__map reveal">
            <iframe
              title="Mapa — Origifure Porto"
              src={showroom.maps}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
