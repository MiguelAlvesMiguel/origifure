import { Icon } from './Icons.jsx'
import { whatsappLink } from '../config/site.js'

// Botão flutuante de WhatsApp.
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar por WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
      <span className="wa-float__pulse" aria-hidden="true" />
    </a>
  )
}
