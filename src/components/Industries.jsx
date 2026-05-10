import FadeUp from "./FadeUp";
import { INDUSTRIES } from "../data";
import "../styles/components.css";

export default function Industries() {
  return (
    <section id="industries" className="industries-section section-padding">
      <div className="container">

        <FadeUp>
          <p className="section-label">Our Reach</p>
          <h2 className="section-title">Industries We Serve</h2>
        </FadeUp>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <FadeUp key={ind.name} delay={i * 0.08}>
              <IndustryCard {...ind} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}

function IndustryCard({ num, icon, name, desc }) {
  return (
    <div className="industry-card">
      <span className="industry-num">{num}</span>
      <div className="industry-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
