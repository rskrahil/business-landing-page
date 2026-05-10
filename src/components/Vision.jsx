import FadeUp from "./FadeUp";
import "../styles/components.css";

export default function Vision() {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-grid">

          {/* Left */}
          <FadeUp>
            <p className="section-label light">Our Vision</p>
            <h2 className="section-title light">
              As a global leader in next-generation IT solutions, we combine
              human expertise with cutting-edge technology to empower businesses.
            </h2>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.15}>
            <p className="vision-body">
              The foundation of success begins with a single vision. We drive
              your business forward with purposeful innovation — dedicating
              resources to R&D so our experts can transform possibilities into
              actionable results.
            </p>
            <a href="#contact" className="btn btn-white">
              Learn More
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
