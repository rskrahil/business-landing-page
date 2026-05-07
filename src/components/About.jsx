import FadeUp from "./FadeUp";
import { VALUES } from "../data";
import "../styles/components.css";

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left — text */}
          <FadeUp>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              A Dynamic Team<br />of Innovators
            </h2>
            <p className="about-body">
              At IZU Solutions, we combine technical expertise and creative thinking
              to address complex challenges with simplicity and efficiency —
              empowering businesses to thrive in the digital age.
            </p>
            <div className="values-list">
              {VALUES.map((v, i) => (
                <div key={i} className="value-card">
                  <span className="value-dot" />
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — image grid */}
          <FadeUp delay={0.15}>
            <div className="about-image-grid">
              <div
                className="about-img-box"
                style={{
                  gridColumn: "1 / -1",
                  height: 200,
                  background: "linear-gradient(135deg, var(--orange-ll), #fff)",
                }}
              >
                💻
              </div>
              <div
                className="about-img-box"
                style={{ height: 160, background: "var(--orange-ll)" }}
              >
                🤖
              </div>
              <div
                className="about-img-box"
                style={{ height: 160, background: "#eef2ff" }}
              >
                ☁️
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
