// Cabeçalho de secção reutilizável.
export default function SectionHeading({ eyebrow, title, intro, align = 'center', light = false }) {
  return (
    <div className={`sec-head sec-head--${align} ${light ? 'sec-head--light' : ''}`}>
      {eyebrow && <span className="sec-head__eyebrow">{eyebrow}</span>}
      <h2 className="sec-head__title">{title}</h2>
      {intro && <p className="sec-head__intro">{intro}</p>}
    </div>
  )
}
