import { useState } from "react";
import FadeUp from "./FadeUp";
import { KEY_SERVICES, ALL_SERVICES } from "../data";
import "../styles/Services.css";

export default function Services() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">

        {/* Header */}
        <FadeUp>
          <div className="services-header">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Our Key Services</h2>
            </div>
            <p className="services-header-sub">
              Comprehensive technology solutions built for modern, growth-focused businesses.
            </p>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div className="services-grid">
          {KEY_SERVICES.map((s, i) => (
            <FadeUp
              key={s.title}
              delay={i * 0.07}
              style={{ gridColumn: s.featured ? "span 2" : "span 1" }}
            >
              <ServiceCard {...s} />
            </FadeUp>
          ))}
        </div>

        {/* All-services accordion */}
        <FadeUp delay={0.2}>
          <div style={{ marginTop: 44 }}>
            <button
              className="services-toggle-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Hide All Services" : "View All 16 Services"}
              <span className={`services-toggle-arrow ${expanded ? "open" : ""}`}>▾</span>
            </button>

            <div
              className="pills-grid"
              style={{ maxHeight: expanded ? 400 : 0 }}
            >
              {ALL_SERVICES.map((s) => (
                <div key={s} className="service-pill">
                  <span className="service-pill-dot" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, featured }) {
  return (
    <div className={`service-card ${featured ? "featured" : ""}`}>
      {featured && <div className="service-card-top-bar" />}
      <div className="service-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
