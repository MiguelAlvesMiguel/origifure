import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/Icons.jsx'
import { faqs } from '../config/site.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section">
      <div className="container container--narrow">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq__icon"><Icon name={isOpen ? 'check' : 'plus'} size={18} /></span>
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
