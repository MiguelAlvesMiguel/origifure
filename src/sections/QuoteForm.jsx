import { useState } from 'react'
import Button from '../components/Button.jsx'
import { Icon } from '../components/Icons.jsx'
import { company, whatsappLink } from '../config/site.js'

const SERVICES = [
  'Ar condicionado',
  'Aquecimento',
  'Ventilação',
  'Fotovoltaico',
  'Solar térmico',
  'Aerotermia / bomba de calor',
  'Administração de condomínio',
  'Renovação / obras',
  'Outro'
]

const PROPERTIES = ['Apartamento', 'Moradia', 'Loja / escritório', 'Edifício', 'Condomínio', 'Outro']
const CLIENTS = ['Particular', 'Empresa', 'Condomínio']

const initial = {
  nome: '',
  telefone: '',
  email: '',
  localidade: '',
  tipoCliente: '',
  servico: '',
  imovel: '',
  mensagem: '',
  consent: false
}

export default function QuoteForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.nome.trim()) e.nome = 'Indique o seu nome.'
    if (!/^[0-9 +]{6,}$/.test(form.telefone.trim())) e.telefone = 'Telefone inválido.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Email inválido.'
    if (!form.servico) e.servico = 'Escolha o serviço pretendido.'
    if (!form.consent) e.consent = 'É necessário aceitar o contacto.'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      const first = document.querySelector('.field--error input, .field--error select, .field--error textarea')
      first?.focus()
      return
    }
    // Pronto para ligar a Netlify Forms / EmailJS / Resend / Supabase / API.
    setSent(true)
    setForm(initial)
  }

  return (
    <section className="section section--tint" id="orcamento">
      <div className="container quote">
        <div className="quote__form-wrap reveal">
          <span className="sec-head__eyebrow">Orçamento grátis</span>
          <h2 className="quote__title">Peça o seu orçamento grátis</h2>
          <p className="quote__sub">
            Diga-nos o que precisa e a nossa equipa entra em contacto consigo.
          </p>

          {sent ? (
            <div className="quote__success" role="status">
              <span className="quote__success-icon"><Icon name="check" size={30} /></span>
              <h3>Obrigado!</h3>
              <p>Recebemos o seu pedido e entraremos em contacto brevemente.</p>
              <Button type="button" variant="outline" size="md" onClick={() => setSent(false)}>
                Enviar novo pedido
              </Button>
            </div>
          ) : (
            <form className="quote__form" onSubmit={onSubmit} noValidate>
              <div className="grid grid--2">
                <div className={`field ${errors.nome ? 'field--error' : ''}`}>
                  <label htmlFor="nome">Nome *</label>
                  <input id="nome" type="text" value={form.nome} onChange={set('nome')} autoComplete="name" />
                  {errors.nome && <span className="field__err">{errors.nome}</span>}
                </div>
                <div className={`field ${errors.telefone ? 'field--error' : ''}`}>
                  <label htmlFor="telefone">Telefone *</label>
                  <input id="telefone" type="tel" value={form.telefone} onChange={set('telefone')} autoComplete="tel" />
                  {errors.telefone && <span className="field__err">{errors.telefone}</span>}
                </div>
                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                  {errors.email && <span className="field__err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="localidade">Localidade</label>
                  <input id="localidade" type="text" value={form.localidade} onChange={set('localidade')} />
                </div>
                <div className="field">
                  <label htmlFor="tipoCliente">Tipo de cliente</label>
                  <select id="tipoCliente" value={form.tipoCliente} onChange={set('tipoCliente')}>
                    <option value="">Selecione…</option>
                    {CLIENTS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className={`field ${errors.servico ? 'field--error' : ''}`}>
                  <label htmlFor="servico">Serviço pretendido *</label>
                  <select id="servico" value={form.servico} onChange={set('servico')}>
                    <option value="">Selecione…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.servico && <span className="field__err">{errors.servico}</span>}
                </div>
                <div className="field">
                  <label htmlFor="imovel">Tipo de imóvel</label>
                  <select id="imovel" value={form.imovel} onChange={set('imovel')}>
                    <option value="">Selecione…</option>
                    {PROPERTIES.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="anexo">Anexar fotografias ou plantas</label>
                  <input id="anexo" type="file" accept="image/*,.pdf" multiple />
                </div>
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem / descrição do projeto</label>
                <textarea id="mensagem" rows="4" value={form.mensagem} onChange={set('mensagem')} />
              </div>

              <div className={`field field--check ${errors.consent ? 'field--error' : ''}`}>
                <label htmlFor="consent">
                  <input id="consent" type="checkbox" checked={form.consent} onChange={set('consent')} />
                  <span>Aceito ser contactado pela Origifure relativamente ao meu pedido.</span>
                </label>
                {errors.consent && <span className="field__err">{errors.consent}</span>}
              </div>

              <Button type="submit" variant="primary" size="lg" icon="arrow">
                Enviar pedido de orçamento
              </Button>
            </form>
          )}
        </div>

        <aside className="quote__side reveal">
          <h3>Prefere falar diretamente?</h3>
          <p>A nossa equipa está disponível para o ajudar.</p>
          <ul className="quote__side-list">
            <li>
              <Icon name="phone" size={20} />
              <a href={`tel:${company.phoneIntl}`}>{company.phone}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={20} />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{company.whatsapp}</a>
            </li>
            <li><Icon name="clock" size={20} /><span>{company.hours}</span></li>
            <li>
              <Icon name="pin" size={20} />
              <span>{company.addresses.showroom.street}, {company.addresses.showroom.zip}</span>
            </li>
          </ul>
          <div className="quote__side-actions">
            <Button href={`tel:${company.phoneIntl}`} variant="white" size="md" icon="phone">
              Ligar agora
            </Button>
            <Button href={whatsappLink} variant="outline-light" size="md" icon="whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Button>
          </div>
        </aside>
      </div>
    </section>
  )
}
