import { useEffect, useState } from 'react'
import Button from './Button.jsx'
import { Icon } from './Icons.jsx'
import { navLinks, company } from '../config/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive('#' + current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={close} aria-label="Origifure — início">
          <img src="/logo.png" alt="Origifure Climatização" />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`header__link ${active === l.href ? 'header__link--active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={`tel:${company.phoneIntl}`}>
            <span className="header__phone-ic"><Icon name="phone" size={16} /></span>
            <span className="header__phone-txt">
              <small>Apoio ao cliente</small>
              <strong>{company.phone}</strong>
            </span>
          </a>
          <Button href="#orcamento" variant="primary" size="sm">Pedir Orçamento</Button>
        </div>

        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Navegação móvel">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-menu__link"
              onClick={close}
              style={{ '--i': i }}
            >
              {l.label}
              <Icon name="arrow" size={16} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <Button href="#orcamento" variant="primary" size="lg" onClick={close}>
            Pedir Orçamento
          </Button>
          <a className="mobile-menu__phone" href={`tel:${company.phoneIntl}`}>
            <Icon name="phone" size={18} /> {company.phone}
          </a>
        </div>
      </div>
      {open && <div className="mobile-menu__backdrop" onClick={close} />}
    </header>
  )
}
