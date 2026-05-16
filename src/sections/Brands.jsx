const brands = [
  'Daikin', 'Mitsubishi Electric', 'Midea', 'Gree', 'Samsung',
  'LG', 'Baxi', 'Hisense', 'Ferroli', 'Giatsu',
  'Airwell', 'Fujitsu', 'Daitsu', 'General', 'Haier',
  'Hitachi', 'Haice',
]

// Duplicate for seamless infinite marquee
const track = [...brands, ...brands]

export default function Brands() {
  return (
    <div className="brands-band">
      <div className="brands-band__label">Marcas que instalamos</div>
      <div className="brands-band__marquee" aria-hidden="true">
        <ul className="brands-band__track">
          {track.map((b, i) => (
            <li key={`${b}-${i}`} className="brands-band__item">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
