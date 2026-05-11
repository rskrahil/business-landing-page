import { useState } from "react";
import FadeUp from "./FadeUp";
import { FOOTER_COMPANY_LINKS, FOOTER_NAV_LINKS } from "../data";
import "../styles/components.css";

export default function Footer() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <footer id="contact" className="footer">

      {/* Main grid */}
      <div className="footer-grid container-wide">

        {/* Brand */}
        <FadeUp>
          <span className="footer-logo">IZU<span>Solutions</span></span>
          <p className="footer-tagline">
            Technology &amp; Process for Growth. Building tomorrow's solutions
            for businesses today.
          </p>
          <a href="tel:6026260033" className="footer-phone">(602) 626-0033</a>
          <span className="footer-address">
            15650 N Black Canyon Hwy #B135<br />
            Phoenix, Arizona 85053
          </span>
        </FadeUp>

        {/* Company links */}
        <FadeUp delay={0.1}>
          <h4 className="footer-col-title">Company</h4>
          <div className="footer-col-links">
            {FOOTER_COMPANY_LINKS.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </FadeUp>

        {/* Nav links */}
        <FadeUp delay={0.15}>
          <h4 className="footer-col-title">Navigate</h4>
          <div className="footer-col-links">
            {FOOTER_NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
        </FadeUp>

        {/* Contact form */}
        <FadeUp delay={0.2}>
          <h4 className="footer-col-title">Get In Touch</h4>

          {submitted ? (
            <div className="form-success">
              ✓ Message sent! We'll be in touch soon.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  className="form-input"
                  type="text"
                  placeholder="First Name *"
                  value={form.firstName}
                  onChange={update("firstName")}
                  required
                />
                <input
                  className="form-input"
                  type="text"
                  placeholder="Last Name *"
                  value={form.lastName}
                  onChange={update("lastName")}
                  required
                />
              </div>
              <input
                className="form-input"
                type="email"
                placeholder="Work Email *"
                value={form.email}
                onChange={update("email")}
                required
              />
              <input
                className="form-input"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={update("phone")}
              />
              <textarea
                className="form-textarea"
                placeholder="Message..."
                rows={3}
                value={form.message}
                onChange={update("message")}
              />
              <button type="submit" className="form-submit">
                GET STARTED →
              </button>
            </form>
          )}
        </FadeUp>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom container-wide">
        <p className="footer-copyright">
          © 2025 IZU Solutions. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Legal Disclaimer</a>
          <div className="footer-socials">
            {[
              { icon: "📸", label: "Instagram" },
              { icon: "💼", label: "LinkedIn" },
              { icon: "🔵", label: "Facebook" },
            ].map(({ icon, label }) => (
              <a key={label} href="#" className="social-icon" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
