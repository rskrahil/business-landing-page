import { useCycler } from "../hooks";
import { HERO_WORDS, STATS } from "../data";
import "../styles/Hero.css";

export default function Hero() {
  const [idx, fadeIn] = useCycler(HERO_WORDS, 2600);

  return (
    <section id="home" className="hero">
      {/* Decorative shapes */}
      <div className="hero-ring-lg" />
      <div className="hero-ring-sm" />
      <div className="hero-blob" />

      {/* Badge */}
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Phoenix, AZ — Global IT Solutions
      </div>

      {/* Headline */}
      <h1 className="hero-title">
        Empowering{" "}
        <span
          className={`hero-title-word ${fadeIn ? "" : "fade-out"}`}
        >
          {HERO_WORDS[idx]}
        </span>
        ,<br />Building Tomorrow.
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        We deliver cutting-edge software, AI integration, cloud services, and digital
        transformation strategies that turn your challenges into competitive advantages.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <a href="#contact" className="btn btn-orange">Schedule a Consultation</a>
        <a href="#services" className="btn btn-outline">Explore Services</a>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        {STATS.map((s, i) => (
          <div key={s.label} className="hero-stat">
            <div className="hero-stat-num">{s.num}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
