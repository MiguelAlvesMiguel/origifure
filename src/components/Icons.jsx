// Conjunto de ícones SVG (stroke) usado nos serviços e benefícios.
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function Icon({ name, size = 28 }) {
  const p = { ...base, width: size, height: size }
  switch (name) {
    case 'snow':
      return (
        <svg {...p}><path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17"/><path d="M12 5l-2.2-2.2M12 5l2.2-2.2M12 19l-2.2 2.2M12 19l2.2 2.2"/></svg>
      )
    case 'flame':
      return (
        <svg {...p}><path d="M12 22c4 0 7-2.7 7-6.5 0-4-3-6-4-9-2.5 1.5-2 4-3.5 5C9.5 9 9 6 8 4.5 6 7 5 9.5 5 15.5 5 19.3 8 22 12 22Z"/></svg>
      )
    case 'wind':
      return (
        <svg {...p}><path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h9a2.5 2.5 0 1 1-2.5 2.5"/></svg>
      )
    case 'sun':
      return (
        <svg {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></svg>
      )
    case 'droplet':
      return (
        <svg {...p}><path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg>
      )
    case 'leaf':
      return (
        <svg {...p}><path d="M21 3C9 3 4 9 4 16c0 2 .7 3.7 1.7 5C8 18 12 12 20 9c-6 4-9 9-11 12"/></svg>
      )
    case 'advice':
      return (
        <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z"/><path d="M9 9h8M9 13h5"/></svg>
      )
    case 'custom':
      return (
        <svg {...p}><path d="M12 3 4 7v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7Z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    case 'efficiency':
      return (
        <svg {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6Z"/></svg>
      )
    case 'support':
      return (
        <svg {...p}><path d="M4 14a8 8 0 0 1 16 0"/><rect x="2" y="14" width="4" height="6" rx="1"/><rect x="18" y="14" width="4" height="6" rx="1"/><path d="M20 20a4 4 0 0 1-4 3h-2"/></svg>
      )
    case 'phone':
      return (
        <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
      )
    case 'whatsapp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.68-6.13A11.86 11.86 0 0 1 .16 11.9C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.55-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.13c1.68 1 3.27 1.6 5.45 1.6 5.45 0 9.9-4.43 9.9-9.88a9.86 9.86 0 0 0-9.88-9.9c-5.46 0-9.9 4.44-9.9 9.9 0 2.3.67 4.02 1.8 5.6l-1 3.62 3.63-.95zM17.5 14.7c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41z"/></svg>
      )
    case 'arrow':
      return (
        <svg {...p} width={size} height={size}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      )
    case 'check':
      return (
        <svg {...p} width={size} height={size}><path d="M20 6 9 17l-5-5"/></svg>
      )
    case 'plus':
      return (
        <svg {...p} width={size} height={size}><path d="M12 5v14M5 12h14"/></svg>
      )
    case 'mail':
      return (
        <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
      )
    case 'pin':
      return (
        <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      )
    case 'clock':
      return (
        <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      )
    case 'shield':
      return (
        <svg {...p}><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6Z"/></svg>
      )
    default:
      return null
  }
}
