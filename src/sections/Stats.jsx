import CountUp from '../components/CountUp.jsx'
import { stats, media } from '../config/site.js'

export default function Stats() {
  return (
    <section
      className="stats"
      style={{ backgroundImage: `linear-gradient(115deg, rgba(11,31,51,.93), rgba(13,120,191,.82)), url(${media.solarBuildings})` }}
    >
      <div className="container stats__inner">
        {stats.map((s, i) => (
          <div key={s.label} className="stats__item reveal" style={{ '--d': `${i * 110}ms` }}>
            <div className="stats__value">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
