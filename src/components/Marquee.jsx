import { MARQUEE_ITEMS } from "../data";
import "../styles/components.css";

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}<span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
