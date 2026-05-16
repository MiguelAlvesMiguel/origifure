import { Icon } from '../components/Icons.jsx'
import { company, services, whatsappLink } from '../config/site.js'

const empresa = [
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Financiamento', href: '#financiamento' },
  { label: 'Contactos', href: '#contactos' }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <img src="/logo.png" alt="Origifure Climatização" className="footer__logo" />
          <p>
            Soluções de climatização, aquecimento, ventilação e energias renováveis à
            medida do seu projeto.
          </p>
        </div>

        <div className="footer__col">
          <h4>Serviços</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}><a href="#servicos">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            {empresa.map((e) => (
              <li key={e.href}><a href={e.href}>{e.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contactos</h4>
          <ul className="footer__contacts">
            <li><Icon name="phone" size={16} /><a href={`tel:${company.phoneIntl}`}>{company.phone}</a></li>
            <li><Icon name="whatsapp" size={16} /><a href={whatsappLink} target="_blank" rel="noopener noreferrer">{company.whatsapp}</a></li>
            <li><Icon name="pin" size={16} /><span>{company.addresses.showroom.street}, Porto</span></li>
            <li><Icon name="clock" size={16} /><span>{company.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Origifure Unipessoal Lda. Todos os direitos reservados.</p>
          <nav className="footer__legal">
            <a href="#">Política de Privacidade</a>
            <a href="https://www.livroreclamacoes.pt/inicio" target="_blank" rel="noopener noreferrer">Livro de Reclamações</a>
            <a href="#financiamento">Informação sobre Intermediação de Crédito</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
